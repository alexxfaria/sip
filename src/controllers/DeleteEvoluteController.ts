import { DeleteEvoluteService } from "../services/DeleteEvoluteService";
import { Request, Response } from "express";

class DeleteEvoluteController {
    async handle(request: Request, response: Response){
        const { id } = request.params;
        const deleteEvoluteService = new DeleteEvoluteService();
        const deleteEvolute = await deleteEvoluteService.execute(id);
        if (deleteEvolute instanceof Error) {
            return response.status(404).json(deleteEvolute.message);
        }
        return response.json('Evolução do paciente excluido com sucesso!');
    }
}
export { DeleteEvoluteController }