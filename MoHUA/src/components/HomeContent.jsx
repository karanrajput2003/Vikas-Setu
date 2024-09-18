import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { BackgroundBeams } from "./ui/background-beams";
import img from "../assets/home_bg.jpg";

export default function HomeContent() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${img})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32 md:pt-40">
        <BackgroundBeams />
        
        <h1 className="text-center font-extrabold leading-tight tracking-tight text-white">
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-4">
            <Typewriter
              words={["Welcome To"]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red-500">
            <Typewriter
              words={["Vikas Setu"]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>

        <p className="mt-6 text-xl sm:text-2xl text-white text-center max-w-3xl mx-auto">
          Virtual Inter Departmental Knowledge And Assistance System
        </p>

        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <Link
            to="/contractor"
            className="inline-flex items-center justify-center px-8 py-3 text-base sm:text-lg font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>

        {/* Spacer to push content up */}
        <div className="flex-grow" />
      </div>
    </main>
  );
}