import express from "express";
import rootRouter from "./routers/rootRouter";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Global Middlewares
app.use("/static", express.static("assets"));
app.use("/", rootRouter);

export default app;
