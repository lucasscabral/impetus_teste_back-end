import * as express from "express";
import * as cors from "cors";
import { Request, Response } from "express";
import { connection } from "./database/db";
import router from "./routes";

const app = express();

app.use(cors(), express.json());

app.get("/setup", async (req: Request, res: Response) => {
  try {
    const start = connection.connect();

    // Cria a tabela de usuarios
    (await start).query(
      `CREATE TABLE usuarios (id SERIAL PRIMARY KEY,nome VARCHAR(100) NOT NULL,email VARCHAR(100) UNIQUE NOT NULL,senha VARCHAR(100) NOT NULL,data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`
    );

    // -- Insere registros na tabela de usuarios
    (await start).query(`
      INSERT INTO usuarios (nome, email, senha) VALUES
      ('João', 'joao@example.com', '888129bc-41aa-424c-ad35-cc554a5865fd'),
      ('Maria', 'maria@example.com', 'f141f7b5-f829-40d1-9acd-03392555f76c'),
      ('Pedro', 'pedro@example.com', 'd189c433-95f5-46cc-a07e-c356561b2fe2');
      `);

    res.send("Banco de dados configurado com sucesso!").status(200);
  } catch (err) {
    console.error("Erro ao configurar o banco de dados:", err);
    res.status(500).send("Erro ao configurar o banco de dados");
  }
});

app.use(router);

app.listen(3002, () => console.log("Servidor Rodando..."));
