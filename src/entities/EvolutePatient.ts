import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid} from "uuid";
import { Patient } from "./Patient";
import { User } from "./User";

@Entity("evolute_paciente")
class EvolutePatient {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    descricao: string;

    @Column()
    user_id_alter: string;

    @JoinColumn({ name: "user_id_alter"})
    @ManyToOne(() => User)
    userAlter: User;

    @Column()
    patient_id: string;

    @JoinColumn({name: "patient_id"})
    @ManyToOne(() => Patient)
    patientID: Patient;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {this.id = uuid();}
    }

}
export { EvolutePatient };