import { Pool } from "pg";

// const { Pool } = pg;

export const connection = new Pool({
  user: "postgres",
  host: "db",
  port: 5432,
  database: "impetus_teste2",
  password: "postgres",
});
