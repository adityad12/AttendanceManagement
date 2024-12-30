import { Pool } from "pg";

const pool = new Pool({
    host: "localhost",
    port: "5432",
    user: "postgres",
    password: "admin",
    database: "attendance"
})

export const query = async (text, params) => {
    const res = await pool.query(text, params);
    return res.rows;
  };