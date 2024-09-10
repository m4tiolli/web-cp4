import React from "react";
import { FaUser } from "react-icons/fa";
function Usuario({ usuario }) {
  return (
    <div className="bg-sky-600 transition-all hover:scale-105 cursor-pointer p-4 rounded-md flex flex-col items-center justify-center gap-3 shadow-sm">
      <FaUser className="text-white border-2 p-2 text-6xl rounded-full" />
      <h1 className="text-white font-semibold text-2xl">{usuario.nome}</h1>
      <h3 className="text-white font-medium text-xl">{usuario.email}</h3>
      <p className="text-white text-xl italic">"{usuario.comentarios}"</p>
      <div className="w-full flex items-center justify-between">
        <button className="text-white border-2 outline-none font-semibold border-white transition-all hover:bg-white hover:text-sky-600 rounded-md py-1 px-2 w-[48%]">
          Editar
        </button>
        <button className="text-sky-600 bg-white border-2 outline-none font-semibold border-white transition-all hover:opacity-70 rounded-md py-1 px-2 w-[48%]">
          Editar
        </button>
      </div>
    </div>
  );
}

export default Usuario;
