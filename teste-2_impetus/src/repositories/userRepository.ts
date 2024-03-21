import { connection } from "../database/db";

async function getAllUsers() {
  const { rows } = await connection.query(`SELECT * FROM usuarios`);
  return rows;
}
async function getUserById(id: number) {
  const { rows } = await connection.query(
    `SELECT * FROM usuarios WHERE id=$1`,
    [id]
  );
  return rows;
}
async function getUserByEmail(email: string) {
  const { rows } = await connection.query(
    `SELECT * FROM usuarios WHERE email=$1`,
    [email]
  );
  return rows;
}

async function createUser(bodyUser: {
  nome: string;
  email: string;
  senha: string;
}) {
  const { nome, email, senha } = bodyUser;

  const { rows } = await connection.query(
    `INSERT INTO usuarios (nome, email, senha) VALUES
  ($1, $2, $3) RETURNING *`,
    [nome, email, senha]
  );

  return rows[0];
}
async function updateUser(bodyUserUpdate: {
  nome?: string;
  email?: string;
  senha?: string;
  id: string;
}) {
  const { nome, email, senha, id } = bodyUserUpdate;

  const queryText = `UPDATE usuarios SET nome=$1, email=$2, senha=$3 WHERE id=$4 RETURNING *`;

  const { rows } = await connection.query(queryText, [
    nome,
    email,
    senha,
    `${Number(id)}`,
  ]);

  return rows;
}
async function deleteUser(id: number) {
  await connection.query(`DELETE FROM usuarios WHERE id = $1`, [id]);
}

export const useRepository = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
};
