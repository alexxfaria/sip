import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class evolutePatient1639671709755 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "evolute_paciente",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "descricao",
                        type: "varchar"
                    },
                    {
                        name: "user_id_alter",
                        type: "uuid"
                    },
                    {
                        name: "patient_id",
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
                        name: "FKpatientevolute",
                        referencedTableName: "paciente",
                        referencedColumnNames: ["id"],
                        columnNames: ["patient_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKuserpatient",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id_alter"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("evolute_paciente")
    }

}
