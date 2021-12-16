import { EntityRepository, Repository } from "typeorm";
import { EvolutePatient } from "../entities/EvolutePatient";

@EntityRepository(EvolutePatient)
class EvolutePatientRepositories extends Repository<EvolutePatient> {

}
export { EvolutePatientRepositories };