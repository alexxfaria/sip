import { ListPatientService } from "../services/ListPatientService";
import { Request, Response } from "express";

class ListPatientController {
    async handle(request: Request, response: Response){
        const { user_id } = request;
        const listPatientService = new ListPatientService();
        const patients = await listPatientService.execute(user_id);
        return response.json(patients);
    }
}
export { ListPatientController }