/** @format */

import React from "react";
import Seats from "./Seats";
import Information from "./Information";

export default function BookingPage() {
  return (
    <div className="container h-96">
      <h2 className="text-center mb-4 p-4 uppercase bg-red-600 top-1 rounded-2xl">
        Chọn ghế
      </h2>
      <div className="grid grid-cols-2 container">
        <div>
          <Seats />
        </div>
        <div>
          <Information />
        </div>
      </div>
    </div>
  );
}
