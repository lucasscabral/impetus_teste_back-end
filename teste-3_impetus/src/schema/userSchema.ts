import Joi from "joi";

const validateUser = Joi.object({
  nome: Joi.string().required().messages({
    nome_vazio: "o campo nome não pode ser vazio!",
  }),
  email: Joi.string().email().required().messages({
    email_vazio: "o campo email não pode ser vazio!",
    email_valido: "Deve ser um email válido!",
  }),
});

export const userSchema = {
  validateUser,
};
