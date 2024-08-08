import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg max-w-2xl w-full">
        <h2 className="text-3xl font-semibold mb-4 text-center text-blue-600">
          About Us
        </h2>
        <p className="text-gray-700 mb-6 text-center">
          Welcome to MyClassera! We are dedicated to providing high-quality
          educational resources and tools to help students and educators
          succeed. Our platform offers a wide range of courses and learning
          materials designed to support learning at all levels.
        </p>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2 text-blue-500">
            Our Mission
          </h3>
          <p className="text-gray-700">
            Our mission is to make education accessible and engaging for
            everyone. We believe that learning should be a lifelong journey, and
            we are committed to helping our users achieve their educational
            goals through innovative and effective solutions.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2 text-blue-500">
            Our Team
          </h3>
          <p className="text-gray-700">
            Our team is composed of passionate educators, developers, and
            designers who are dedicated to creating the best learning experience
            possible. We work tirelessly to ensure that our platform meets the
            highest standards of quality and usability.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2 text-blue-500">
            Contact Us
          </h3>
          <p className="text-gray-700">
            If you have any questions, feedback, or suggestions, please don't
            hesitate to reach out to us. We are always here to help and look
            forward to hearing from you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
