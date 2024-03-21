import * as express from "express";
import * as cors from "cors";
import { Request, Response } from "express";

const app = express();

app.use(cors(), express.json());

const list = [{ nome: "Lucas" }, { nome: "Sabrina" }];

app.get("/", (req: Request, res: Response) => {
  res.send(list).status(200);
});

app.listen(3000, () => console.log("Servidor Rodando..."));
