import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { BackgroundBeams } from "../components/ui/background-beams";
function HomeContent() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 space-y-8 bg-black relative overflow-hidden">
      {/* Background beams or decorative elements could be added here */}
      <BackgroundBeams />

      <h1 className="text-center text-4xl sm:text-6xl md:text-8xl font-extrabold leading-tight">
        <span className="block text-red-500 mb-4">
          <Typewriter
            words={["Welcome To"]}
            loop={1}
            cursor
            cursorStyle=""
            typeSpeed={100}
          />
        </span>
        <span className="block text-white">
          <Typewriter
            words={["Vikas Setu"]}
            loop={1}
            cursor
            cursorStyle=""
            typeSpeed={100}
          />
        </span>
      </h1>

      <p className="text-lg sm:text-2xl text-gray-400 text-center max-w-3xl">
        Virtual Inter Departmental Knowledge And Assistance System
      </p>

      <div className="mt-8">
        <Link
          className="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3 text-lg font-medium text-white shadow-lg transition-transform transform hover:scale-105 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500"
          to="/contractorlogin"
        >
          Get Started
        </Link>
      </div>
      
      {/* Decorative spacing at the bottom */}
      <div className="flex-grow"></div>
    </main>
  );
}

export default HomeContent;
