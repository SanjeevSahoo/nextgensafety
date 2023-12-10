export const revalidate = 30;
import { RowDataPacket } from "mysql2";
import mysql from "mysql2/promise";

interface IUser extends RowDataPacket {
  id: number;
  name: string;
}

const getUserData = async () => {
  const dbconnection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT ? +process.env.MYSQL_PORT : 3306,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  });
  try {
    const [results] = await dbconnection.query<IUser[]>(
      "select id, name from users"
    );
    dbconnection.end();
    return results;
  } catch (error) {
    return [];
  }
};

export default async function Home() {
  const usersData = await getUserData();

  if (usersData && usersData.length > 0) {
    return (
      <div className="bg-cyan-300">
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
  }

  return <div>hello</div>;
}
