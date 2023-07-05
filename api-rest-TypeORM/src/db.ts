import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "betel279",
  database: "typeormrestapi",
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});
