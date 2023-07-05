import { DataSource } from "typeorm";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "betel279",
  database: "typeormrestapi",
  synchronize: true,
  entities: [User],
  subscribers: [],
  migrations: [],
});
