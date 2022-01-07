import { getCustomRepository } from "typeorm";
import { PatientRepositories } from "../repositories/PatientRepositories";

type UpdatePatient = {
    id: string;
    name?: string;
    rg?: number;
    cpf?: number;
    genero?: string;
    cep?: number;
    logradouro?: string;
    numero?: string;
    uf?: string;
    cidade?: string;
    status?: string;
}

class UpdatePatientService {
    async execute({ id, name, rg, cpf, genero, cep, logradouro, numero, uf, cidade, status}) : Promise<UpdatePatient | Error> {
        const updatePatientRepository = getCustomRepository(PatientRepositories);
        const patientAlreadyExistsId =  await updatePatientRepository.findOne({ id });
        if (!patientAlreadyExistsId) {
            return new Error("Patient already exists");
        }
        const patientAlreadyExists = await updatePatientRepository.findOne({ cpf });
        if(patientAlreadyExists){
            throw new Error("CPF already exists");
        }
        patientAlreadyExistsId.name = name;
        patientAlreadyExistsId.rg = rg;
        patientAlreadyExistsId.cpf = cpf;
        patientAlreadyExistsId.genero = genero;
        patientAlreadyExistsId.cep = cep;
        patientAlreadyExistsId.logradouro = logradouro;
        patientAlreadyExistsId.numero = numero;
        patientAlreadyExistsId.uf = uf;
        patientAlreadyExistsId.cidade = cidade;
        patientAlreadyExistsId.status = status;

        await updatePatientRepository.save(patientAlreadyExistsId);
        return patientAlreadyExistsId;
    }

}
export { UpdatePatientService };
