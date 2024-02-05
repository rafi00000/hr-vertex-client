"use client";
import { coreContext } from "@/provider/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
const useLoginPage = () => {
  const router = useRouter();
  const { logIn } = useContext(coreContext);
  const [loading, setloading] = useState(false);
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      logIn(email, password)
        .then((userCredential) => {
          setloading(false);
          const user = userCredential.user;
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `logged in user succesfuly`,
            showConfirmButton: false,
            timer: 1500,
          });
          router.push("/profile");
        })
        .catch((error) => {
          setloading(false);
          const errorCode = error.code;
          const errorMessage = error.message;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${error.message}`,
            footer: "unable to log in user",
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="w-full absolute h-full top-0 left-0 bg-black flex justify-center items-center">
      <div className="p-5 border  py-16 w-3/4 lg:w-1/2 mx-auto my-4  rounded-lg ">
        <form className="space-y-4" onSubmit={handleForm}>
          <div className="form-control w-full">
            <label className="text-md font-semibold">Email</label>
            <input
              type="Email"
              placeholder="Enter your nEmail"
              className="input input-bordered"
              name="email"
            />
          </div>
          <div className="form-control w-full">
            <label className="text-md font-semibold">password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
              name="password"
            />
          </div>

          <div className="flex  justify-center">
            <button
              type="submit"
              className="font-bold btn mt-9  bg-white w-full"
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default useLoginPage;
