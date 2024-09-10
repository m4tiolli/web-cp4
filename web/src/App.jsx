import { useState } from "react";
import Cadastro from "./components/Cadastro";
import Visualizar from "./components/Visualizar";

function App() {
  const [component, setComponent] = useState("");

  return (
    <main className="w-full h-dvh flex items-center justify-center bg-[#efefef]">
      {component === "" ? (
        <button
          className="bg-sky-600 rounded-md w-64 py-2 font-semibold text-white text-2xl transition-all hover:opacity-70"
          onClick={() => setComponent("cadastrar")}
        >
          Cadastrar
        </button>
      ) : (
        <Visualizar />
      )}
    </main>
  );
}

export default App;
