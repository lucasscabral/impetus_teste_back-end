import { Request, Response } from "express";
import { postService } from "../services/postService";

export async function getAllPosts(req: Request, res: Response) {
  try {
    const posts = await postService.getAllPosts();

    res.send(posts).status(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
export async function getPostById(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const post = await postService.getPostById(+id);
    res.send(post).status(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function getPostOfUserById(req: Request, res: Response) {
  const { autor_id } = req.params;
  try {
    const postsUser = await postService.getPostOfUserById(+autor_id);
    res.send(postsUser).status(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function createPost(req: Request, res: Response) {
  const { autor_id } = req.params;
  try {
    const dataPost = req.body;
    await postService.createPost(dataPost, +autor_id);

    res.sendStatus(201);
  } catch (error: any | TypeError) {
    if (error.code === "unauthorized") {
      res.status(401).json(error);
      return;
    } else if (error.code === "NotFound") {
      res.status(404).json(error);
      return;
    }
    res.sendStatus(500);
  }
}
export async function updatePost(req: Request, res: Response) {
  const { autor_id } = req.params;
  try {
    const bodyPostUpdate = req.body;
    await postService.updatePost(bodyPostUpdate, +autor_id);

    res.sendStatus(200);
  } catch (error: any | TypeError) {
    if (error.code === "unauthorized") {
      res.status(401).json(error);
      return;
    } else if (error.code === "NotFound") {
      res.status(404).json(error);
      return;
    }
    res.sendStatus(500);
  }
}

export async function deletePost(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await postService.deletePost(+id);

    res.sendStatus(200);
  } catch (error: any | TypeError) {
    if (error.code === "NotFound") {
      res.status(404).json(error);
      return;
    } else {
      res.sendStatus(500);
    }
  }
}

export const postController = {
  getAllPosts,
  getPostById,
  getPostOfUserById,
  createPost,
  updatePost,
  deletePost,
};
