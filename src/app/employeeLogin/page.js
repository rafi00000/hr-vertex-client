"use client"

import { coreContext } from "@/provider/AuthContext";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosRequest from './../../axiosConfig/useAxiosRequest';

const EmployeeLogin = () => {

  const { logIn, createUserEmail } = useContext(coreContext);
  const router = useRouter();
  const [show, setShow] = useState(false)
  const axiosPublic = useAxiosRequest();


    const handleEmployeeLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        try {
        logIn(email, password)
            .then((data) => {
            const user = data.user;
            Swal.fire({
            position: "center",
            icon: "success",
            title: `logged in user succesfuly`,
            showConfirmButton: false,
            timer: 1500,
          });
          router.push("/dashboard");
        })
        .catch((error) => {~

          axiosPublic.get(`/users/${email}`)
          .then(res => {
            const user = res.data.data;
            const name = user?.FullName; 
            const password = user?._id;
            const photo = user?.photo;
            console.log(user);
            //if exist
            if(user){
              createUserEmail(email, password)
              .then(data => {
                const user = data.user;
              updateProfile(data.user, {
                displayName: name,
                photoURL: photo,
              })
              .then(res => {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Success",
                  showConfirmationButton: false,
                  timer: 1500,
                })
              })
              .catch(err => console.log("profile update error", err))
              })
              .catch(err =>{
                // creating user err
                Swal.fire({
                  position: "center",
                  icon: "error",
                  title: "Operation Failed",
                  showConfirmationButton: false,
                  timer: 1500,
                });
              })
            }
            else{
              router.push("/");
            }
          })
          // finished fetching user

          .catch(err => router.push("/"));
        });
    }
    catch (error) {
      router.push("/")
    }
  }

    return (
        <div className="bg-[url('https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover min-h-screen flex flex-col justify-center items-center">
          <form className="space-y-4 my-10 w-4/5 md:w-1/2 p-10 glass rounded-lg" onSubmit={handleEmployeeLogin}>
            <h1 className="text-4xl font-bold text-white text-center">Employee Login</h1>
            <div className="form-control w-full">
              <label className="text-md font-semibold">Email</label>
              <input
                type="Email"
                placeholder="Enter your email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>

            <div className="form-control w-full relative">
              <label className="text-md font-semibold">Password</label>
              <input
                type={show ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered"
                required
                name="password"
              />
              <span
                className="absolute top-10 right-3"
                onClick={() => setShow(!show)}
              >
                {show ? <FaEyeSlash className="cursor-pointer"></FaEyeSlash> : <FaEye className="cursor-pointer"></FaEye>}
              </span>
            </div>

            <div className="flex  justify-center">
              <button
                type="submit"
                className="font-bold btn bg-emerald-400 hover:bg-emerald-500 hover:text-white w-full"
              >
                LOGIN
              </button>
            </div>
        </form>
        </div>
    );
};

export default EmployeeLogin;