import {Column, CreateDateColumn, Entity, JoinColumn,  OneToOne, PrimaryColumn, UpdateDateColumn} from "typeorm";
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

    @Column()
    user_id: string;
    
    @JoinColumn({ name: "user_id"})
    @OneToOne(() => User)
    userID: User;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {this.id = uuid();}
    }

}
export { Patient };