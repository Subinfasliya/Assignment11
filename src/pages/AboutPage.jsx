import React from "react";

const AboutPage = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto p-6 h-150 flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>

        <p className="mb-4 text-md">
          Welcome to our website! We are dedicated to providing high-quality
          solutions and services that help users achieve their goals
          efficiently.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">What We Do</h2>
        <ul className="list-disc pl-6">
          <li>Build modern web applications using React.js</li>
          <li>Develop mobile applications with React Native</li>
          <li>Create backend services using Node.js and Express.js</li>
          <li>Design responsive user interfaces</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Our Vision</h2>
        <p>
        Our vision is to leverage technology to solve real-world problems and
        create applications that are simple, effective, and accessible to
        everyone.
      </p>
      </div>
    </>
  );
};

export default AboutPage;
