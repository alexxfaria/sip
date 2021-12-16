import { Request, Response } from "express";
import { EvolutePatientService } from "../services/EvolutePatientService";

class EvolutePatientController {
    async handle(request: Request, response: Response) {
        const { descricao, patient_id } = request.body;
        const { user_id } = request;
        const evolutePatientService = new EvolutePatientService();
        const evolutePatient = await evolutePatientService.execute({ descricao, patient_id, user_id_alter: user_id });
        return response.json(evolutePatient);
    }
}
export { EvolutePatientController };