import { getCustomRepository, getConnection } from "typeorm";
import { PatientRepositories } from "../repositories/PatientRepositories";


class DeletePatientService{
    async execute(id: string){
        const patientRepository = getCustomRepository(PatientRepositories);
        if (!(await patientRepository.findOne(id))) {
            return new Error ("Patient does not exist");
        }
        const deletePatients = await patientRepository.delete(id);
        return deletePatients;
    }
}
export {DeletePatientService};