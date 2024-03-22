import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import { userRepository } from "../repositories/userRepository";

async function getAllUsers() {
  const users = await userRepository.find();
  return users;
}

async function getUserById(id: number) {
  const user = await userRepository.findOneBy({ id });
  return user;
}

async function createUser(bodyUser: { nome: string; email: string }) {
  const existUserWithEmail = await userRepository.findOneBy({
    email: bodyUser.email,
  });

  if (existUserWithEmail !== null) {
    throw {
      code: "unauthorized",
      message: "Já existe um usuário com este email!",
    };
  }

  await userRepository.manager.save(
    userRepository.manager.create(User, bodyUser)
  );
}

async function updateUser(bodyUserUpdate: {
  nome?: string;
  email?: string;
  id: string;
}) {
  const existUserId = await userRepository.findOneBy({
    id: +bodyUserUpdate.id,
  });

  if (!existUserId) {
    throw {
      code: "unauthorized",
      message: "Esse usuário não existe!",
    };
  }

  const userUpdated = await userRepository.update(bodyUserUpdate.id, {
    email: bodyUserUpdate.email,
    nome: bodyUserUpdate.nome,
  });
  return userUpdated;
}
async function deleteUser(id: number) {
  const existUserId = await userRepository.findOneBy({ id });
  if (!existUserId) {
    throw {
      code: "NotFound",
      message: "Esse usuário não existe!",
    };
  }

  await userRepository.delete({ id });
}

export const useService = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
