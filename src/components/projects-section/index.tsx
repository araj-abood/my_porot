import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import projectLogo from "../../assets/qudra-logo.jpg";

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mt-10 px-5 bg-gray-900 text-gray-100 py-10"
    >
      <h1 className="text-5xl text-main-300 font-bold mb-8 text-center">
        My Projects
      </h1>
      <div className="bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Qudra Mobile Application
        </h2>
        <p className="text-gray-300 mb-4">
          Qudra Mobile Application is a full stack application built using react
          native (front-end), and back end (express js), Typescript was used in
          both front end and back end code, to enable type safety and for better
          development experience, The application also had an AI model hosted in
          an independent flash API which was able to predict sign language
          images in to text. Qudra is a platform which connects people from the
          deaf community with service providers, The application has:
        </p>
        <ol>
          <li>appointment system</li>
          <li>Chat feature</li>
          <li> Video upload feature</li>
          <li>user management and authentication</li>
        </ol>
        <h3 className="text-lg font-medium my-2">Tech Stack used:</h3>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>React Native</li>
          <li>ExpressJS + TypeScript</li>
          <li>Python</li>
          <li>PyTorch</li>
          <li>Neural Networks</li>
          <li>MySQL</li>
          <li>ORM</li>
        </ul>

        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">Project Media:</h3>
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="w-full h-full rounded-lg overflow-hidden"
          >
            <SwiperSlide>
              <img
                src={projectLogo}
                alt="Project Screenshot 1"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
