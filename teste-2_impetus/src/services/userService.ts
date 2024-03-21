import { useRepository } from "../repositories/userRepository";
import { hashPassword } from "../utils/userUtils";

async function getAllUsers() {
  const rows = await useRepository.getAllUsers();
  return rows;
}

async function getUserById(id: number) {
  const rows = await useRepository.getUserById(id);
  return rows;
}

async function createUser(bodyUser: {
  nome: string;
  email: string;
  senha: string;
  id: string;
}) {
  const existUserWithEmail = await useRepository.getUserByEmail(bodyUser.email);
  if (existUserWithEmail.length > 0) {
    throw {
      code: "unauthorized",
      message: "Já existe um usuário com este email!",
    };
  }
  const passwordEncrypted = await hashPassword(bodyUser.senha);

  const rows = await useRepository.createUser({
    ...bodyUser,
    senha: passwordEncrypted,
  });
  return rows;
}

async function updateUser(bodyUserUpdate: {
  nome?: string;
  email?: string;
  senha?: string;
  id: string;
}) {
  const existUserId = await useRepository.getUserById(+bodyUserUpdate.id);

  if (existUserId.length == 0) {
    throw {
      code: "unauthorized",
      message: "Esse usuário não existe!",
    };
  }

  const passwordEncrypted = await hashPassword(bodyUserUpdate.senha);

  const rows = await useRepository.updateUser({
    ...bodyUserUpdate,
    senha: passwordEncrypted,
  });
  return rows;
}
async function deleteUser(id: number) {
  const existUserId = await useRepository.getUserById(id);
  if (existUserId.length === 0) {
    throw {
      code: "NotFound",
      message: "Esse usuário não existe!",
    };
  }

  await useRepository.deleteUser(id);
}

export const useService = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
