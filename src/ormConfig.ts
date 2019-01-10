import { ConnectionOptions } from "typeorm";

const connectionOptions: ConnectionOptions = {
  type: "postgres",
  database: "uber",
  synchronize: true,
  logging: true,
  entities: ["entities/**/*.*"],
  host: process.env.DB_ENDPOINT,
  //실제서버를 운영하면 DB_ENDPONIT AWS의 주소같은게 들어가야한다.
  port: 5432,
  // postgres의 포트는 항상같다. 5432
    username: process.env.DB_USENAME, 
    password: process.env.DB_PASSWORD 
};

export default connectionOptions;   