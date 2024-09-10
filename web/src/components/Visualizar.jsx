import { useEffect, useState } from "react";
import axios from "axios";
import Usuario from "./Usuario";
function Visualizar() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800")
      .then((response) => setUsuarios(response.data))
      .catch((error) =>
        alert("Erro ao buscar usuários: ", error.response.data)
      );
  });

  return (
    <div>
      {usuarios.map((usuario, index) => (
        <Usuario usuario={usuario} key={index++} />
      ))}
    </div>
  );
}

export default Visualizar;
