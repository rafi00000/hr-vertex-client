"use client";
import { useContext, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { coreContext } from "@/provider/AuthContext";
import useAxiosRequest from "@/axiosConfig/useAxiosRequest";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import Link from "next/link";
import { useRouter } from "next/navigation";
const RegisterPage = () => {
  const router = useRouter();
  const [loading, setloading] = useState(false);
  const axiosrequest = useAxiosRequest();
  const { createUserEmail, googleLogIn } = useContext(coreContext);
  const [showpassword, setshowpassword] = useState(false);
  const imageapikey = process.env.VITE_IMAGE_API_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=5201d474546c521dc75dd9c96eea7a84`;
  const HandelSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.files[0];
    console.log(name, password, email, photo);
    if (password.length < 8) {
      alert("password less than 8 characters");
    } else if (!/[A-Z]/.test(password)) {
      alert("password should have a one uppercase characters");
    } else if (!/[a-z]/.test(password)) {
      alert("password should have a one lowercase characters");
    } else if (!/[@,$,#,%,&]/.test(password)) {
      alert("password should have a one spaical characters");
    }
    console.log(image_hosting_api);
    const res = await axiosrequest.post(
      image_hosting_api,
      { image: photo },
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    );
    console.log(res.data);
    if (res.data.success) {
      createUserEmail(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(userCredential.user, {
            displayName: name,
            photoURL: res.data.data.display_url,
          })
            .then(() => {
              setloading(false);
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `account created succesfuly`,
                showConfirmButton: false,
                timer: 1500,
              });
              router.push("/");
            })
            .catch((error) => {
              setloading(false);
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${error.message}`,
                footer: "unable to update new users profile",
              });
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setloading(false);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${error.message}`,
            footer: "unable to create new user",
          });
        });
    } else {
      setloading(false);
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "unable to create new user",
      });
    }
  };
  const loginwithgoogle = () => {
    googleLogIn()
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        //   setloading(false)
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire("opps!!", `${errorMessage}`, "error");
      });
    // setloading(false)
  };
  return (
    <>
      <div className=" bg-[url('https://i.ibb.co/N1VHksh/Black-And-Red-Modern-Business-Human-Resource-Management-Presentation.png')] md:py-36 py-48">
        <p className="md:text-5xl text-3xl font-bold text-center block uppercase text-white">
          Create an account
        </p>
      </div>
      <div className="p-5 border  py-16 w-3/4 lg:w-1/2 mx-auto my-4  rounded-lg ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form
            onSubmit={HandelSubmit}
            className="space-y-4 md:space-y-6"
            action="#"
          >
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Name :
              </label>
              <input
                type="text"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="Name..."
                required=""
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email :
              </label>
              <input
                type="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="Email..."
                required=""
              />
            </div>

            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Password :
              </label>
              <input
                type={showpassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                required=""
              />
              <span
                className="absolute top-10 right-3"
                onClick={() => setshowpassword(!showpassword)}
              >
                {showpassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Photo :
              </label>
              <input
                type="file"
                name="photo"
                placeholder="photo..."
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                required=""
              />
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  "
                  required=""
                />
              </div>
              <div className="ml-3 text-sm">
                <label className="font-light text-gray-500 dark:text-gray-300">
                  I accept the{" "}
                  <a
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    href="#"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full btn  text-black bg-emerald-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              {" "}
              Create an account
            </button>
          </form>
          <p className="text-center">or</p>
          <button
            onClick={loginwithgoogle}
            className="w-full btn  text-black bg-emerald-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            <FcGoogle></FcGoogle> GOOGLE
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-primary-600 hover:underline "
            >
              <span className="text-blue-700">Login here</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
