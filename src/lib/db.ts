import mysql from "mysql2/promise";

export async function query(query: string) {
  //   const dbconnection = await mysql.createConnection({
  //     host: process.env.MYSQL_HOST,
  //     post: process.env.MYSQL_PORT,
  //     database: process.env.MYSQL_DATABASE,
  //     user: process.env.MYSQL_USER,
  //     password: process.env.MYSQL_PASSWORD,
  //   });

  const dbconnection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT ? +process.env.MYSQL_PORT : 3306,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  });

  try {
    const results = await dbconnection.query(query);
    dbconnection.end();
    return results;
  } catch (error) {
    return [];
  }
}
