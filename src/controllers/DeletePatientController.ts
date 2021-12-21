import { DeletePatientService } from "../services/DeletePatientService";
import { Request, Response } from "express";

class DeletePatientController {
    async handle(request: Request, response: Response){
        const { id } = request.params;
        const deletePatientService = new DeletePatientService();
        const deletePatients = await deletePatientService.execute(id);
        if (deletePatients instanceof Error) {
            return response.status(404).json(deletePatients.message);
        }
        return response.json('Paciente excluido com sucesso!');
    }
}
export { DeletePatientController }