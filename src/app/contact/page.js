"use client";

import Button from "@/Components/ClintSideComponents/Button";
import Image from "next/image";

const ContactPage = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const contactMessage = {name, email, subject, message}
    console.log(contactMessage);
  };

  return (
    <div className="min-h-screen">
      {/* banner here we will add a bg picture */}
      <div className="relative flex justify-center items-center h-[180px]">
        <Image
          alt="banner-bg"
          className="bg-teal-300 w-full h-full"
          src="https://i.ibb.co/N1VHksh/Black-And-Red-Modern-Business-Human-Resource-Management-Presentation.png"
          width={500}
          height={500}
        ></Image>
        <p className="text-5xl font-bold absolute  text-white">Contact Page</p>
      </div>
      {/* contact form */}
      <form
        className="p-5 border w-3/4 lg:w-1/2 mx-auto my-4 space-y-4 rounded-lg "
        onSubmit={handleForm}
      >
        <div className="form-control w-full">
          <label className="text-md font-semibold">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered"
            name="name"
          />
        </div>
        <div className="form-control w-full">
          <label className="text-md font-semibold">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered"
            name="email"
          />
        </div>
        <div className="form-control w-full">
          <label className="text-md font-semibold">Subject</label>
          <input
            type="text"
            placeholder="Enter the subject"
            className="input input-bordered"
            name="subject"
          />
        </div>
        <div className="form-control w-full">
          <label className="text-md font-semibold">Message</label>
          <textarea name="message" placeholder="Enter your message here" id="" cols="30" rows="10" className="input input-bordered p-4">
            
          </textarea>
        </div>
        
        <div className="flex justify-center">
          <Button text={"Submit"} className="font-bold"></Button>
        </div>

      </form>
    </div>
  );
};

export default ContactPage;
