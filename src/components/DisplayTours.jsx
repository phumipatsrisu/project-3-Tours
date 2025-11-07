import React, { useState } from "react";

const DisplayTours = ({ id, image, name, info, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden max-w-md mx-auto my-6 border border-gray-300">
      <img
        src="https://feelfreetravel.b-cdn.net/uploads/destinations/a29e2a7f2437fcaee966e61a2878bb518013adbb6158f387fbcce0ab359cfb50.jpg?width=1600"
        alt={name}
        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
      />

      <div className="p-5 bg-gray-400">
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
          <h4 className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg font-medium">
            ${price}
          </h4>
        </div>

        <p className="text-gray-200 text-sm mb-4 leading-relaxed">
          {readMore ? info : info.substring(0, 100) + "..."}
          <button
            className="text-blue-600"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>

        <div className="flex justify-center">
          <button
            onClick={() => removeTour(id)}
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
          >
            Not Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayTours;
