import { Request, Response } from "express";
import { PatientService } from "../services/PatientService";

class PatientController {
    async handle(request: Request, response: Response) {
        const {  name, rg, cpf, genero, cep, logradouro, numero, uf, estado, status } = request.body
        const patientService = new PatientService();
        const patient = await patientService.execute({ name, rg, cpf, genero, cep, logradouro, numero, uf, estado, status });
        return response.json(patient);
    }
}
export { PatientController };