import { Router } from "express";
import * as userController from "../components/controllers/user/usercontroller.js";
import * as taskController from "../components/controllers/task/controller.js";
import * as jwt from "../components/controllers/jwt/auth.js";


const router = Router();




router.post("/api/singup", userController.singup);

router.post("/api/singin", userController.singin);

router.post("/api/dashboard/task", jwt.tokenExist, taskController.newTask);

router.put(
  "/api/dashboard/update/:id",
  jwt.tokenExist,
  taskController.UpdateTask
);

router.get("/api/dashboard", jwt.tokenExist, taskController.getTasks);

router.delete(
  "/api/dashboard/task/:id",
  jwt.tokenExist,
  taskController.deleteTask
);

export { router };
