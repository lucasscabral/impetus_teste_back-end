import Joi from "joi";

const validatePost = Joi.object({
  titulo: Joi.string().required().messages({
    titulo_vazio: "o campo titulo não pode ser vazio!",
  }),
  conteudo: Joi.string().required().messages({
    titulo_vazio: "o campo titulo não pode ser vazio!",
    titulo_valido: "Deve ser um titulo válido!",
  }),
});

export const postSchema = {
  validatePost,
};
