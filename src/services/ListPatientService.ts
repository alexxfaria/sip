import { getCustomRepository } from "typeorm";
import { PatientRepositories } from "../repositories/PatientRepositories";


class ListPatientService{
    async execute(){
        const patientRepository = getCustomRepository(PatientRepositories);
        const patients = await patientRepository.find();
        return patients;
    }
}
export {ListPatientService};