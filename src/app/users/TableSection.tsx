import { RowDataPacket } from "mysql2";
import mysql from "mysql2/promise";
import React from "react";

interface IUser extends RowDataPacket {
  id: number;
  name: string;
}

const getUserData = async (searchText: string) => {
  const dbconnection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT ? +process.env.MYSQL_PORT : 3306,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  });
  try {
    let strSql = "select id, name from users";
    if (searchText.length > 0) {
      strSql += ` where name like '%${searchText}%' `;
    }
    await new Promise((r) => setTimeout(r, 2000));
    const [results] = await dbconnection.query<IUser[]>(strSql);
    dbconnection.end();
    return results;
  } catch (error) {
    return [];
  }
};

interface IProps {
  searchText: string;
}
const TableSection = async (props: IProps) => {
  const { searchText } = props;

  const usersData = await getUserData(searchText);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSection;
