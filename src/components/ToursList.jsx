import React from "react";
import DisplayTours from "./DisplayTours";

const ToursList = ({ tours, removeTour }) => {
  return (
    <div className="">
      <h3 className="border-b-3 border-blue-400 w-auto text-center mt-4 font-bold text-4xl">
        Our Tours
      </h3>
      <div>
        {tours.map((item) => {
          return (
            <DisplayTours
              key={item.id}
              {...item}
              removeTour={removeTour}
            ></DisplayTours>
          );
        })}
      </div>
    </div>
  );
};

export default ToursList;
