import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { PatientController } from "./controllers/PatientController";
import { ensureAdmin } from "./middlewares/ensureAdmin"; 

const router = Router();

const userController = new UserController();
const patientController = new PatientController();

router.post("/users", userController.handle);
router.post("/patients", patientController.handle);

export { router };