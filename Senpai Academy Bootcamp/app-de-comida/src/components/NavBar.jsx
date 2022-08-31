import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <header>
        <nav className="bg-[#141a32] w-full h-[10vh] px-10 flex justify-center items-center">
          <ul className="flex justify-around items-center text-2xl text-white w-full">
            <li className=""><NavLink to="/">Home</NavLink></li>
            <li className=""><NavLink to="/restaurantes">Restaurantes</NavLink></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export  {NavBar};