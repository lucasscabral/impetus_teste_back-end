import express from "express";
import { AppDataSource } from "./data-source";
import cors from "cors";
import router from "./routes";

AppDataSource.initialize().then(() => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use(router);

  app.listen(process.env.PORT || 3003, () =>
    console.log("Servidor inicializado...")
  );
});
