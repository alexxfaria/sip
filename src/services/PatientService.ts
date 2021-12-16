import { getCustomRepository } from "typeorm";
import { PatientRepositories } from "../repositories/PatientRepositories";


class PatientService {
    async execute({ name, rg, cpf, genero, cep, logradouro, numero, uf, cidade, status, user_id }) {
        const patientRepository = getCustomRepository(PatientRepositories);
        if(!name){
            throw new Error("Name incorrect");
        };
        const patientAlreadyExists = await patientRepository.findOne({ name });
        if(patientAlreadyExists){
            throw new Error("Patient already exists");
        };
        const patient = patientRepository.create({ name, rg, cpf, genero, cep, logradouro, numero, uf, cidade, status, user_id });
        await patientRepository.save(patient);
        return patient;
    }

}
export { PatientService };