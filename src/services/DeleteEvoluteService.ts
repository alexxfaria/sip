import { getCustomRepository, getConnection } from "typeorm";
import { EvolutePatientRepositories } from "../repositories/EvolutePatient";


class DeleteEvoluteService{
    async execute(id: string){
        const evoluteRepository = getCustomRepository(EvolutePatientRepositories);
        if (!(await evoluteRepository.findOne(id))) {
            return new Error ("Patient does not exist");
        }
        const deleteEvolute = await evoluteRepository.delete(id);
        return deleteEvolute;
    }
}
export {DeleteEvoluteService};