import { ListPatientService } from "../services/ListPatientService";
import { Request, Response } from "express";

class ListPatientController {
    async handle(request: Request, response: Response){
        const listPatientService = new ListPatientService();
        const patients = await listPatientService.execute();
        if (patients instanceof Error) {
            return response.status(404).json(patients.message);
        }
        return response.json(patients);
    }
}
export { ListPatientController }