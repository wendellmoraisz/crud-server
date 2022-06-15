import { Router } from "express";
import { createUser } from "./controllers/createUser";
import { deleteUser } from "./controllers/deleUser";
import { updateUser } from "./controllers/updateUser";
const routes = Router();

routes.post("/user", createUser);
routes.delete("/user", deleteUser);
routes.put("/user", updateUser);

export default routes;