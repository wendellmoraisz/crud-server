import { Router } from "express";
import { createUser } from "./controllers/createUser";
import { deleteUser } from "./controllers/deleUser";
const routes = Router();

routes.post("/user", createUser);
routes.delete("/user", deleteUser);

export default routes;