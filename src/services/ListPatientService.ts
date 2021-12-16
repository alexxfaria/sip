import { getCustomRepository } from "typeorm";
import { PatientRepositories } from "../repositories/PatientRepositories";


class ListPatientService{
    async execute(user_id: string){
        const patientRepository = getCustomRepository(PatientRepositories);
        const patients = await patientRepository.find({
            where: {
                user_id: user_id,
            }
            
        });
        return patients;
    }
}
export {ListPatientService};