import { useState } from "react";
import Cadastro from "./components/Cadastro";
import Visualizar from "./components/Visualizar";
import { FaArrowLeft } from "react-icons/fa";

function App() {
  const [component, setComponent] = useState("");

  const options = {
    cadastrar: <Cadastro />,
    visualizar: <Visualizar />,
    alterar: <Visualizar />,
    remover: <Visualizar />,
  };

  const renderComponent = () => {
    return options[component] || null;
  };

  return (
    <main className="w-full h-dvh flex flex-col gap-4 items-center justify-center bg-[#efefef] relative">
      <FaArrowLeft
        className="absolute top-4 left-4 cursor-pointer text-2xl transition-all hover:opacity-70"
        onClick={() => window.location.reload()}
      />
      {component === "" ? (
        <>
          <button
            className="bg-sky-600 rounded-md w-64 py-2 font-semibold text-white text-2xl transition-all hover:opacity-70"
            onClick={() => setComponent("cadastrar")}
          >
            Cadastrar
          </button>
          <button
            className="bg-sky-600 rounded-md w-64 py-2 font-semibold text-white text-2xl transition-all hover:opacity-70"
            onClick={() => setComponent("visualizar")}
          >
            Visualizar
          </button>
          <button
            className="bg-sky-600 rounded-md w-64 py-2 font-semibold text-white text-2xl transition-all hover:opacity-70"
            onClick={() => setComponent("alterar")}
          >
            Alterar
          </button>
          <button
            className="bg-sky-600 rounded-md w-64 py-2 font-semibold text-white text-2xl transition-all hover:opacity-70"
            onClick={() => setComponent("remover")}
          >
            Remover
          </button>
        </>
      ) : (
        renderComponent()
      )}
    </main>
  );
}

export default App;
