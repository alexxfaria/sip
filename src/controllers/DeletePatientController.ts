import { DeletePatientService } from "../services/DeletePatientService";
import { Request, Response } from "express";

class DeletePatientController {
    async handle(request: Request, response: Response){
        const { id } = request.params;
        const deletePatientService = new DeletePatientService();
        const deletePatients = await deletePatientService.execute(id);
        return response.json(deletePatients);
    }
}
export { DeletePatientController }