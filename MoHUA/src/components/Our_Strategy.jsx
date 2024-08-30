import React from 'react';
import { ArrowRight } from 'lucide-react';
import strate from '../assets/latest/strategy.jpeg'

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="flex-1">
          <h1 className="text-7xl font-bold text-red-600 mb-6 mx-10">Our Strategy</h1>
          <br/>
          <br/>
          <p className="text-gray-700 mb-6 mx-10 w-1000">
            Vikas Setu is a platform for interdepartmental coordination in urban governance, streamlining data sharing, project updates, and resource management. It features real-time inventory management, Google Calendar integration for task scheduling, and OpenCV-based automated project status updates. Public engagement is enhanced through a Twitter-like discussion model and a ticket-based system for issue resolution. With a corruption-free e-bidding system and an award/star system for departments and contractors.
          </p>
          <button className="bg-gray-800 text-white hover:bg-gray-700 py-2 px-4 rounded flex items-center mx-10">
            Watch Video <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <img
            src={strate}
            alt="DataSmart Cities Strategy"
            className="w-150px h-100px px shadow-lg rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
