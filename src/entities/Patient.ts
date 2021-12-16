import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid} from "uuid";
import { User } from "./User";

@Entity("paciente")
class Patient {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    rg: number;

    @Column()
    cpf: number;

    @Column()
    genero: string;

    @Column()
    cep: number;

    @Column()
    logradouro: string;

    @Column()
    numero: string;

    @Column()
    uf: string;

    @Column()
    cidade: string;

    @Column()
    status: string;

    @JoinColumn({ name: "id"})
    @ManyToOne(() => User)
    userID: User;

    @Column()
    user_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {this.id = uuid();}
    }

}
export { Patient };