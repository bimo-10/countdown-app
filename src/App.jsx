import React, { useState } from "react";
import { useEffect } from "react";

// buat targetnya
const COUNTDOWN_TARGET = new Date("2023-12-31T23:59:59");
console.log(COUNTDOWN_TARGET);

function getTimeLeft() {
  const totalTimeLeft = COUNTDOWN_TARGET - new Date();
  //   console.log(total);

  // milisecond * menit * jam * hari
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);

  return { days, hours, minutes, seconds };
}
// getTimeLeft();

const App = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());
  //   console.log(timeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <main className=" bg-slate-200 min-h-screen flex flex-col justify-center items-center">
      <header className="py-8">
        <h1 className="text-5xl text-center text-cyan-700 md:text-6xl lg:text-7xl">
          COUNTDOWN TIMER
        </h1>
      </header>
      <section className=" p-10 grid grid-cols-2 gap-6 md:flex md:flex-row md:gap-12 lg:gap-24 justify-center items-center text-center">
        {/* convert object to array */}
        {Object.entries(timeLeft).map((time, index) => {
          const [label, value] = time;
          {
            /* console.log(value); */
          }

          return (
            <div key={index} className="">
              <div
                className="relative p-4 bg-gradient-to-b from-cyan-500 to-teal-500
          w-32 h-32 flex flex-col justify-center items-center my-2 rounded-md md:w-40 md:h-40 lg:w-52 lg:h-52"
              >
                <div className="absolute border border-gray-500 border-opacity-50 w-full"></div>
                <h3 className="text-5xl md:text-6xl lg:text-7xl">{value}</h3>
              </div>
              <p className="text-lg md:text-xl lg:text-2xl ">{label}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default App;
