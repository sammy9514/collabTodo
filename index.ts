import express, { Application } from "express";
import cors from "cors";
import { mainConnection } from "./utils/dbConfig";
import { mainApp } from "./mainApp";

const port = 1414;

const app: Application = express();

app.use(express.json());
app.use(cors());
mainConnection();
mainApp(app);

const server = app.listen(port, () => {
  console.log("server is up and running");
});

process.on("uncaughtException", (error: Error) => {
  console.log("uncaughtException", error);
  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("unhandledRejection", reason);
  server.close(() => {
    process.exit(1);
  });
});
