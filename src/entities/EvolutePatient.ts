import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid} from "uuid";

@Entity("evolute_paciente")
class EvolutePatient {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    descricao: string;

    @Column()
    user_id_alter: string;

    @Column()
    patient_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {this.id = uuid();}
    }

}
export { EvolutePatient };