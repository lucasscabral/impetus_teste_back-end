import * as Joi from "joi";

const validateUser = Joi.object({
  nome: Joi.string().required().messages({
    nome_vazio: "o campo nome não pode ser vazio!",
  }),
  email: Joi.string().email().required().messages({
    email_vazio: "o campo email não pode ser vazio!",
    email_valido: "Deve ser um email válido!",
  }),
  senha: Joi.string().required().min(5).messages({
    senha_vazio: "o campo senha não pode ser vazio!",
    senha_min: "A senha deve ter no mínimo 5 caracter!",
  }),
});

export const userSchema = {
  validateUser,
};
