import { Sequelize } from "sequelize";

const DB_HOST = process.env.DB_HOST;

export const sequelize = new Sequelize(DB_HOST);

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
