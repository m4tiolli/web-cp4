import { useState } from "react";

function Cadastro() {
  const [values, setValues] = useState({
    nome: { value: "", name: "nome", placeholder: "Nome" },
    endereco: { value: "", name: "endereco", placeholder: "Endereço" },
    email: { value: "", name: "email", placeholder: "E-mail" },
    senha: { value: "", name: "senha", placeholder: "Senha" },
    comentarios: { value: "", name: "comentarios", placeholder: "Comentários" },
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: { ...prev[name], value },
    }));
  };

  return (
    <main className="w-full h-dvh flex items-center justify-center bg-[#efefef]">
      <div className="bg-white p-4 rounded-md shadow-sm flex items-center flex-col gap-4">
        <h1 className="text-3xl font-bold text-sky-600">
          Cadastro de Usuários
        </h1>
        {Object.keys(values).map((key, index) => (
          <input
            key={index}
            type={values[key].name === "senha" ? "password" : "text"}
            className="w-full rounded-md bg-sky-600 bg-opacity-20 border border-sky-300 px-2 py-1 outline-none font-medium text-sky-800"
            onChange={onChange}
            name={key}
            value={values[key].value}
            placeholder={values[key].placeholder}
          />
        ))}
        <button className="bg-sky-600 rounded-md w-full py-2 font-semibold text-white text-2xl transition-all hover:opacity-70">
          Cadastrar
        </button>
      </div>
    </main>
  );
}

export default Cadastro;
