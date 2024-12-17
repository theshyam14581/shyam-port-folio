import React from 'react';
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <>
      <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <span>Please fill out the form below to contact me</span>

        <div className="flex flex-col items-center justify-center mt-5">
          <form
            action="https://getform.io/f/axoovmkb"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">Send your Message</h1>

            {/* Full Name Field */}
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700" htmlFor="name">Full Name</label>
              <input
                name="name"
                id="name"
                type="text"
                placeholder="Enter your full name"
                {...register("name", { required: "Full name is required" })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
            </div>

            {/* Email Address Field */}
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700" htmlFor="email">Email Address</label>
              <input
                name="email"
                id="email"
                type="email"
                placeholder="Enter your email address"
                {...register("email", {
                  required: "Email address is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
            </div>

            {/* Message Field */}
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700" htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Enter your query"
                rows="4"
                {...register("message", { required: "Message is required" })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
