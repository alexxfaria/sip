import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { PatientController } from "./controllers/PatientController";
import { ensureAdmin } from "./middlewares/ensureAdmin"; 
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListPatientController } from "./controllers/ListPatientController";
import { EvolutePatientController } from "./controllers/EvolutePatientController";
import { DeletePatientController } from "./controllers/DeletePatientController";
import { ListUserController } from "./controllers/ListUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { UpdateUserController } from "./controllers/UpdateUserController";
import { UpdatePatientController } from "./controllers/UpdatePatientController";
import { DeleteEvoluteController } from "./controllers/DeleteEvoluteController";


const router = Router();

const userController = new UserController();
const patientController = new PatientController();
const authenticateUserController = new AuthenticateUserController();
const listPatientsController = new ListPatientController();
const listUserController = new ListUserController();
const evolutePatientController = new EvolutePatientController();
const deletePatientController = new DeletePatientController();
const deleteUserController = new DeleteUserController();
const deleteEvoluteController = new DeleteEvoluteController();
const updateUserController = new UpdateUserController();
const updatePatientController = new UpdatePatientController();

router.post("/users", userController.handle);
router.post("/patients", ensureAuthenticated, ensureAdmin, patientController.handle);
router.post("/evolute/patients", ensureAuthenticated, evolutePatientController.handle);
router.post("/login", authenticateUserController.handle);

router.get("/patients/find", ensureAuthenticated, listPatientsController.handle);
router.get("/users/find", ensureAuthenticated, listUserController.handle);

router.delete("/patients/delete/:id", ensureAuthenticated, ensureAdmin, deletePatientController.handle);
router.delete("/users/delete/:id", ensureAuthenticated, ensureAdmin, deleteUserController.handle);
router.delete("/evolute/delete/:id", ensureAuthenticated, ensureAdmin, deleteEvoluteController.handle);

router.put("/users/put/:id", ensureAuthenticated, ensureAdmin, updateUserController.handle);
router.put("/patients/put/:id", ensureAuthenticated, ensureAdmin, updatePatientController.handle);

export { router };