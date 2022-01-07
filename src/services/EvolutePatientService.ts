import { getCustomRepository } from "typeorm";
import { EvolutePatientRepositories } from "../repositories/EvolutePatient";

interface IEvolutePatient {
    descricao: string;
    user_id_alter: string;
    patient_id: string;
}

class EvolutePatientService {
    async execute({ descricao, user_id_alter, patient_id }) : Promise<IEvolutePatient>{
        const evolutePatientRepository = getCustomRepository(EvolutePatientRepositories);
        if(!descricao){
            throw new Error("Description incorrect");
        }
        const evolutePatient = evolutePatientRepository.create({ descricao, user_id_alter, patient_id });
        await evolutePatientRepository.save(evolutePatient);
        return evolutePatient;
    }

}
export { EvolutePatientService };
