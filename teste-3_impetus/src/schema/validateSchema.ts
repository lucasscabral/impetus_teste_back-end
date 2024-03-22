import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

function validateSchema(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      res.status(422).send(error.details.map((e) => e.message).join(", "));
      return;
    }
    next();
  };
}

export default validateSchema;
