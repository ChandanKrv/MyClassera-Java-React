import React, { useState } from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "d9ee898a-0325-4097-a4b1-8a2a7123f0be");
    formData.append(
      "custom_message",
      "This email has been sent from MyClassera"
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Email sent successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      alert("Something went wrong");
    }
    console.log(result);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-blue-600">Get in Touch</h1>
        <p className="text-gray-700 mt-2">
          I&apos;m available for new projects. Let&apos;s talk!
        </p>
      </div>
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        <div className="p-8 md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">
            Contact Details
          </h2>
          <div className="mb-4">
            <VscGithubInverted className="inline-block text-gray-600 text-2xl mr-2" />
            <a
              href="https://github.com/ChandanKrv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Github
            </a>
          </div>
          <div className="mb-4">
            <AiOutlineLinkedin className="inline-block text-gray-600 text-2xl mr-2" />
            <a
              href="https://www.linkedin.com/in/chandankrv/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </div>
          <div className="mb-4">
            <TbWorldWww className="inline-block text-gray-600 text-2xl mr-2" />
            <a
              href="https://chandankrv.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Portfolio
            </a>
          </div>
          <div className="mb-4">
            <p className="text-gray-600">Email: chandankrv7@gmail.com</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-600">Phone: +91 790904XXXX</p>
          </div>
          <div>
            <p className="text-gray-600">Location: Kolkata, India</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="p-8 md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">
            Contact Form
          </h2>
          <label className="block mb-2 text-gray-600">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="block w-full p-2 mb-4 border rounded-md"
            required
          />
          <label className="block mb-2 text-gray-600">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="block w-full p-2 mb-4 border rounded-md"
            required
          />
          <label className="block mb-2 text-gray-600">
            Write your message here
          </label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            className="block w-full p-2 mb-4 border rounded-md"
            required
          ></textarea>
          <input
            type="hidden"
            name="custom_message"
            value="This email has been sent from MyClassera"
          />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Submit now
          </button>
          {result && <p className="mt-4 text-green-500">{result}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
