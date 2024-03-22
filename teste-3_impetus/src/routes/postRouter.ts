import { Router } from "express";
import validateSchema from "../schema/validateSchema";
import { postSchema } from "../schema/postSchema";
import { postController } from "../controllers/postController";

const postRouter = Router();

postRouter.get("/post", postController.getAllPosts);
postRouter.get("/post/:id", postController.getPostById);
postRouter.get("/post/usuario/:autor_id", postController.getPostOfUserById);
postRouter.post(
  "/post/:autor_id",
  validateSchema(postSchema.validatePost),
  postController.createPost
);
postRouter.put("/post/:autor_id", postController.updatePost);
postRouter.delete("/post/:id", postController.deletePost);

export default postRouter;
