import { EntityRepository, Repository } from "typeorm";
import { Patient } from "../entities/Patient";

@EntityRepository(Patient)
class PatientRepositories extends Repository<Patient> {

}
export { PatientRepositories };