import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { BackgroundBeams } from "../components/ui/background-beams";

function HomeContent() {
  return (
    <main className="flex flex-col items-start p-8 space-y-8">
      <h1 className="text-8xl font-bold">
        <span className="text-red-500 text-4xl">
          <Typewriter
            words={["Welcome To"]}
            loop={1}
            // cursor
            cursorStyle="|"
            typeSpeed={100}
          />
        </span>
        <br />
        <Typewriter
          words={["Vikas Setu"]}
          loop={1}
          // cursor
          cursorStyle="|"
          typeSpeed={100}
        />
      </h1>
      <p className="text-2xl font-bold text-gray-500">
        Virtual Inter Departmental Knowledge And Assistance System
      </p>

      <div className="flex justify-between w-full text-center"></div>
      {/* <BackgroundBeams /> */}
      <div className="space-y-4">
        <Link
          className="bg-indigo-600 cursor inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-950"
          to="/contractorlogin"
        >
          Get Started
        </Link>
      </div>
    </main>
  );
}

export default HomeContent;
