"use client";
import { coreContext } from "@/provider/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
const useLoginPage = () => {
    const router = useRouter()
    const { logIn, googleLogIn } = useContext(coreContext)
    const [loading, setloading] = useState(false)   
    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
       try {
        logIn(email, password)
        .then((userCredential) => {
            setloading(false)
            const user = userCredential.user;
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `logged in user succesfuly`,
                showConfirmButton: false,
                timer: 1500
            });
            router.push('/')
        })
        .catch((error) => {
            setloading(false)
            const errorCode = error.code;
            const errorMessage = error.message;
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${error.message}`,
                footer: 'unable to log in user'
            });
        });
       } catch (error) {
        console.log(error)
       }
    };
    const loginwithgoogle = () => {
        googleLogIn()
            .then((result) => {
                const user = result.user;
                const userData = {
                    profileImage: user.photoURL,
                    username: user.displayName,
                    useremail: user.email,
                    role: "user",
                    emailVerified: user.emailVerified
                }
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'logged in successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                //   setloading(false)
            }).catch((error) => {
                const errorMessage = error.message;
                Swal.fire(
                    'opps!!',
                    `${errorMessage}`,
                    'error'
                )
            });
        // setloading(false)
    }
    return (

        <>
      <div className=" bg-[url('https://i.ibb.co/N1VHksh/Black-And-Red-Modern-Business-Human-Resource-Management-Presentation.png')] md:py-36 py-48">

<p className="md:text-5xl text-3xl font-bold text-center block uppercase text-white"> sign in</p> 
</div>
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
                        <button type="submit" className="font-bold btn  bg-teal-400 w-full">LOGIN</button>
                    </div>
                </form>
                <p className="text-center py-2">or</p>
                <div className="mt-5">
                    <button onClick={loginwithgoogle} className="w-full btn  text-black bg-teal-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center"><FcGoogle></FcGoogle> GOOGLE</button>
                </div>
                <p className="text-sm pt-2 font-light text-gray-500 dark:text-gray-400">
                    don t have an account? <Link href="/register" className="font-medium text-primary-600 hover:underline "><span className="text-blue-700">sign up here</span></Link>
                </p>
            </div></>

    );
};

export default useLoginPage;