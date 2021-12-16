import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPaciente1639487787542 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "paciente",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "rg",
                        type: "numeric"
                    },
                    {
                        name: "cpf",
                        type: "numeric"
                    },
                    {
                        name: "genero",
                        type: "varchar"
                    },
                    {
                        name: "cep",
                        type: "numeric"
                    },
                    {
                        name: "logradouro",
                        type: "varchar"
                    },
                    {
                        name: "numero",
                        type: "varchar"
                    },
                    {
                        name: "uf",
                        type: "varchar"
                    },
                    {
                        name: "cidade",
                        type: "varchar"
                    },
                    {
                        name: "status",
                        type: "varchar"
                    },
                    {
                        name: "user_id",
                        type: "uuid"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKuserpatient",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("paciente")
    }

}
