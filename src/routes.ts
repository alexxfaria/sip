import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { PatientController } from "./controllers/PatientController";
import { ensureAdmin } from "./middlewares/ensureAdmin"; 
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

const router = Router();

const userController = new UserController();
const patientController = new PatientController();
const authenticateUserController = new AuthenticateUserController();

router.post("/users", userController.handle);
router.post("/patients", patientController.handle);
router.post("/login", authenticateUserController.handle);

export { router };