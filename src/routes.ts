import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { PatientController } from "./controllers/PatientController";
import { ensureAdmin } from "./middlewares/ensureAdmin"; 
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListPatientController } from "./controllers/ListPatientController";
import { EvolutePatientController } from "./controllers/EvolutePatientController";

const router = Router();

const userController = new UserController();
const patientController = new PatientController();
const authenticateUserController = new AuthenticateUserController();
const listPatientsController = new ListPatientController();
const evolutePatientController = new EvolutePatientController();

router.post("/users", userController.handle);
router.post("/patients", ensureAuthenticated, ensureAdmin, patientController.handle);
router.post("/evolute/patients", ensureAuthenticated, evolutePatientController.handle);
router.post("/login", authenticateUserController.handle);
router.get("/patients/find", ensureAuthenticated, listPatientsController.handle);

export { router };