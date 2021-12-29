import { Request, Response } from "express";
import { UpdatePatientService } from "../services/UpdatePatientService";

class UpdatePatientController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const {  name, rg, cpf, genero, cep, logradouro, numero, uf, cidade, status} = request.body
        const patientUpdateService = new UpdatePatientService();
        const patient = await patientUpdateService.execute({id, name, rg, cpf, genero, cep, logradouro, numero, uf, cidade, status });
        if (patient instanceof Error) {
            return response.status(404).json(patient.message);
        }
        return response.json('Paciente alterado com sucesso!');
    }
}
export { UpdatePatientController };