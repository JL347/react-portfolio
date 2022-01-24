import React from "react";
import headshot from "../Headshot1.jpeg"

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-sky-600 dark:text-sky-900">
            Hello, my name is Jared Lemke and I'm a Software Engineer!
          </h1>
          <p className="mb-2 leading-relaxed">
            Since graduating college with my Bachelors of Science in Information Technology and Administrative Management,
            I have been working in the recruiting and staffing field.
            I always felt that I wasn't being challenged enough and that I had a technical aptitude that I wasn't using so I decided to make a career change and find something that I was truly passionate about.
            That ended up being programming!
          </p>
          <br />
          <p className="mb-6 leading-relaxed">
            While my title recently has been Software Engineer/Technical Recruiter, working in a startup culture has provided me the opportunity to work in a variety of roles.
            I have learned the term “wears multiple hats” very well to this point. As a Software Engineer with almost 3 years of experience,
            I've learned a great deal about what it takes to be a successful developer. While Frontend engineering, primarily React and JS,
            has been my bread and butter since I started my development career, I’ve also worked with Ruby on Rails in the Backend, done some UI/UX design work as well as customer support.
            A few things I’ve done regarding that are overhauling the entire color scheme of the platform, redesigning the main platform dashboard to better exploit the space and layout of the page,
            as well as repurposing the login page.
            I believe that because of what I’ve learned over the past 3 years that I have the strengths to be a competent developer whether that be in Engineering, UX or Customer Support.
            Recently, I've started a hybrid role where I handle a major portion of the day-to-day management and operations of the Development team.
            This responsibility includes performing 1:1’s with team members, acting as a "scrum master" for our daily engineering Trello board,
            and developing/leading new processes to scale the team.
            As mentioned, I've also been the Technical Recruiter the entirety of my tenure with my current company which adds to the already 6 years of recruiting experience I had before going to the coding bootcamp.
            I've become so used to wearing multiple hats and I value that experience because it's allowed me to learn and develop my skillset by touching so many aspects of the business.
            At this point in time, I'm looking for a new challenge that will help me grow in my development career.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-lime-600 border-0 py-2 px-6 focus:outline-none hover:bg-lime-700 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">
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