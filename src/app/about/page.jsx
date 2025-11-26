"use client";

import React, { useState, useEffect } from "react";

export default function AboutPage() {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 22,
    mins: 55,
    secs: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, mins, secs } = prev;

        if (secs > 0) secs--;
        else {
          secs = 59;
          if (mins > 0) mins--;
          else {
            mins = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
              else clearInterval(timer);
            }
          }
        }

        return { days, hours, mins, secs };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      
      {/* Left Side - Car Image */}
      <div className="md:w-1/2">
        <img
          src="https://i.ibb.co/7JCX9CtP/images.jpg"
          alt="Car"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="md:w-1/2 flex items-center justify-center p-8">
        <div className="space-y-6 max-w-md">
          <h1 className="text-4xl font-bold text-purple-700">Best Price For You</h1>
          <h2 className="text-2xl font-semibold">Deal of the Day</h2>
          <h3 className="text-xl font-medium">Roasted Car</h3>
          <p className="text-gray-700 text-lg">
            <span className="line-through text-gray-400 mr-2">$20</span>
            <span className="text-purple-700 font-bold">$15 Now Only</span>
          </p>
          <p className="text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>

          {/* Countdown */}
          <div className="flex gap-4 text-center">
            <div>
              <p className="text-2xl font-bold">{timeLeft.days}</p>
              <p className="text-gray-500 text-sm">days</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{timeLeft.hours}</p>
              <p className="text-gray-500 text-sm">hours</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{timeLeft.mins}</p>
              <p className="text-gray-500 text-sm">mins</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{timeLeft.secs}</p>
              <p className="text-gray-500 text-sm">secs</p>
            </div>
          </div>

          <button className="mt-4 w-full bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
