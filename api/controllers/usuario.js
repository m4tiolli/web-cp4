import { db } from "../db.js";

export const getUsuarios = (_, res) => {
  const q = "SELECT * FROM tb_usuario ORDER BY nome";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const addUsuario = (req, res) => {
  const q = "INSERT INTO tb_usuario (`nome`, `endereco`,`email`,`senha`, `comentarios`) VALUES(?)";
  const values = [
    req.body.nome,
    req.body.endereco,
    req.body.email,
    req.body.senha,
    req.body.comentarios,
  ];
  db.query(q, [values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Registro criado com sucesso");
  });
};

export const updateUsuario = (req, res) => {
  const q = "UPDATE tb_usuario SET `nome` = ?, `endereco` = ? ,`email` = ?,`senha` = ?,`comentarios` = ? WHERE `codigo` = ?";
  const values = [
    req.body.nome,
    req.body.endereco,
    req.body.email,
    req.body.senha,
    req.body.comentarios,
  ];
  db.query(q, [...values, req.params.codigo], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Registro atualizado com sucesso");
  });
};

export const deleteUsuario = (req, res) => {
  const q = "DELETE FROM tb_usuario WHERE `codigo` = ?";
  db.query(q, [req.params.codigo], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Registro deletado com sucesso");
  });
};