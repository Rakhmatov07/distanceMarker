import "dotenv/config";
import { Sequelize } from "sequelize";
const dbUrl = process.env.DB_URL;

export const sequelize = new Sequelize(dbUrl);