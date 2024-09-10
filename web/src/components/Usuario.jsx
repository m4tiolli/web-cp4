import React from "react";

function Usuario({ nome, email, senha, comentarios }) {
  return (
    <div>
      {nome}
      {email}
      {senha}
      {comentarios}
    </div>
  );
}

export default Usuario;
