import express from "express";
import ClassController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

const routes = express.Router();

const classControllers = new ClassController();
const connectionsController = new ConnectionsController();

routes.get("/classes", classControllers.index);
routes.post("/classes", classControllers.create);

routes.get("/connections", connectionsController.index);
routes.post("/connections", connectionsController.create);

export default routes;
