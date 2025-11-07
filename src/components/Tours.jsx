import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import ToursList from "./ToursList";

const Tours = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tours) => tours.id !== id);
    setTours(newTours);
  };

  const fetchdata = async () => {
    try {
      const res = await fetch(
        "https://mocki.io/v1/dd4a827e-ccce-4dfb-a4bf-cb24f3ee7fa9"
      );
      const tours = await res.json();
      setTours(tours);
      console.log(tours);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  if (tours.length == 0) {
    return (
      <div className="flex flex-col items-center justify-center text-3xl font-bold gap-4 mt-3">
      <h2 className="text-gray-800">No Tours Left</h2>
      <button
        className="bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600"
        onClick={() => fetchdata()}
      >
        Refresh
      </button>
    </div>
    );
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="">
        <ToursList tours={tours} removeTour={removeTour} />
      </div>
    </div>
  );
};

export default Tours;
