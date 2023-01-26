import { Model, Column, DataType, Table } from "sequelize-typescript";

@Table
export class Columnstatus extends Model<Columnstatus> {
    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue:false
    })
    delete_status?: boolean;
}



