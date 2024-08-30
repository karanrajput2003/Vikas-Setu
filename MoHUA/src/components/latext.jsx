import React from 'react';
import latest_img from '../assets/latest_img.png';
import j1 from '../assets/latest/1.jpg';
import j2 from '../assets/latest/2.jpg';
import j3 from '../assets/latest/3.jpg';
import j4 from '../assets/latest/4.jpg';


const results = [
  { id: 1, title: 'Mumbai–Ahmedabad High-Speed Rail Corridor', image: j1 },
  { id: 2, title: 'Mumbai Metro', image: j2 },
  { id: 3, title: 'Mumbai Coastal Road', image: j3 },
  { id: 4, title: 'Delhi-Mumbai Expressway', image: j4},
];

const Latest = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
      <img src={latest_img} alt="Latest Projects" className="mx-auto mx-9 mt-6 mb-6 w-full max-w-md object-cover rounded-lg" />

        {results.map((result) => (
          <div key={result.id} className="flex flex-col items-center bg-white p-4 rounded-lg">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border border-gray-200">
              <img src={result.image} alt={result.title} className="object-cover w-full h-full" />
            </div>
            <h3 className="text-center text-sm font-semibold text-gray-700">{result.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest;
