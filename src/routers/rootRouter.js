import express from "express";
import { addItem, home } from "../controllers/homeController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.post("/additem", addItem);

export default rootRouter;
