import { Router } from "express";
import { useController } from "../controllers/userController";
import validateSchema from "../schema/validateSchema";
import { userSchema } from "../schema/userSchema";

const useRouter = Router();

useRouter.get("/usuario", useController.getAllUsers);
useRouter.get("/usuario/:id", useController.getUserById);
useRouter.post(
  "/usuario",
  validateSchema(userSchema.validateUser),
  useController.createUser
);
useRouter.put("/usuario/:id", useController.updateUser);
useRouter.delete("/usuario/:id", useController.deleteUser);

export default useRouter;
