import { getCustomRepository, getConnection } from "typeorm";
import { PatientRepositories } from "../repositories/PatientRepositories";


class DeletePatientService{
    async execute(id: string){
        const patientRepository = getCustomRepository(PatientRepositories);
        const deletePatients = await patientRepository.delete(id);
        return deletePatients;
    }
}
export {DeletePatientService};