import { Request, Response } from "express";
import { useService } from "../services/userService";

export async function getAllUsers(req: Request, res: Response) {
  try {
    const rows = await useService.getAllUsers();

    res.send(rows).status(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
export async function getUserById(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const user = await useService.getUserById(+id);
    res.send(user).status(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function createUser(req: Request, res: Response) {
  try {
    const dataUser = req.body;
    await useService.createUser(dataUser);

    res.sendStatus(201);
  } catch (error) {
    if (error.code === "unauthorized") {
      res.status(401).json(error);
      return;
    }
    res.sendStatus(500);
  }
}
export async function updateUser(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const bodyUserUpdate = req.body;
    await useService.updateUser({ ...bodyUserUpdate, id });

    res.sendStatus(200);
  } catch (error) {
    if (error.code === "unauthorized") {
      res.status(401).json(error);
      return;
    }
    res.sendStatus(500);
  }
}

export async function deleteUser(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await useService.deleteUser(+id);

    res.sendStatus(200);
  } catch (error) {
    if (error.code === "NotFound") {
      res.status(404).json(error);
      return;
    } else {
      res.sendStatus(500);
    }
  }
}

export const useController = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
