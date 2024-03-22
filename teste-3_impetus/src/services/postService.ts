import { postRepository } from "../repositories/postRepository";
import { userRepository } from "../repositories/userRepository";

async function getAllPosts() {
  const allPosts = await postRepository
    .createQueryBuilder("posts")
    .leftJoinAndSelect("posts.autor", "usuarios")
    .getMany();
  return allPosts;
}

async function getPostById(id: number) {
  const post = await postRepository
    .createQueryBuilder("posts")
    .leftJoinAndSelect("posts.autor", "usuarios")
    .where("posts.id = :id", { id })
    .getOne();
  return post ?? [];
}
async function getPostOfUserById(id: number) {
  const posts = await postRepository
    .createQueryBuilder("posts")
    .leftJoinAndSelect("posts.autor", "usuarios")
    .getMany();
  const postsOfUser = posts?.filter((value) => value.autor.id === id);
  return postsOfUser ?? [];
}

async function createPost(
  bodyUser: {
    titulo: string;
    conteudo: string;
  },
  autor_id: number
) {
  const existUserId = await userRepository.findOneBy({ id: autor_id });

  if (!existUserId) {
    throw {
      code: "NotFound",
      message: "Usuário não encontrado com esse Id!",
    };
  }

  await postRepository.save({ ...bodyUser, autor: existUserId });
}

async function updatePost(
  bodyUserUpdate: {
    titulo: string;
    conteudo: string;
  },
  autor_id: number
) {
  const existPostId = await postRepository.findOneBy({
    id: autor_id,
  });

  if (!existPostId) {
    throw {
      code: "NotFound",
      message: "Post não encontrado com esse Id!",
    };
  }

  const postUpdated = await postRepository.update(autor_id, bodyUserUpdate);
  return postUpdated;
}
async function deletePost(id: number) {
  const existPostId = await postRepository.findOneBy({ id });

  if (!existPostId) {
    throw {
      code: "NotFound",
      message: "Post não encontrado com esse Id!",
    };
  }

  await postRepository.delete({ id });
}

export const postService = {
  getAllPosts,
  getPostById,
  getPostOfUserById,
  createPost,
  updatePost,
  deletePost,
};
