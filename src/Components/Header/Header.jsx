import React from "react";
import Image from "../Image/Image";
import logo from "../../Imgs/favicon.png";

function Header() {
  return (
    <div>
      <div className="bg-slate-800 text-white p-2 ">
        <div className="flex justify-center ">
          <Image className="h-24 " src={logo}></Image>
          <p className="text-5xl pt-4 p-1 ">MovieMaze</p>
        </div>
      </div>
      <div className="flex justify-center from-stone-300 p-2">
        <button
          className="w-20 p-1 mr-2
bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50 text-black   "
        >
          Inicio
        </button>
        <button
          className="w-20 p-1 mr-2
bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50 text-black  "
        >
          Inicio
        </button>
        <button
          className="w-20 p-1 mr-2
bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50 text-black  "
        >
          Inicio
        </button>
        <button
          className="w-20 p-1 mr-2
bg-cyan-500  rounded-full shadow-lg shadow-cyan-500/50 text-black  "
        >
          Inicio
        </button>
        <button
          className="w-20 p-1 mr-2
bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50 text-black  "
        >
          Inicio
        </button>
      </div>
    </div>
  );
}

export default Header;
