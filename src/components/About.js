import React from "react";
import headshot from "../Headshot1.jpeg"

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello, my name is Jared Lemke and I'm a Software Engineer!
          </h1>
          <p className="mb-8 leading-relaxed">
            Since graduating college with my Bachelors of Science in Information Technology and Administrative Management,
            I have been working in the recruiting and staffing field.
            I always felt that I wasn't being challenged enough and that I had a technical aptitude that I wasn't using so I decided to make a career change and find something that I was truly passionate about.
            That ended up being programming!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="Headshot"
            src={headshot}
          />
        </div>
      </div>
    </section>
  );
}