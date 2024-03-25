import React from "react";

export const Header = () => {
  return (
    <header className={"sticky top-0"}>
      <div className="bg-[#fefefe] drop-shadow-md">
        <nav className=" flex items-center justify-between mx-auto max-w-screen-xl px-4 lg:px-6 py-6 w-full">
          <h1 className="text-center w-full font-extrabold text-3xl text-indigo-400">
            Weather App
          </h1>
        </nav>
      </div>
    </header>
  );
};
