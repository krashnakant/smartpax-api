import { Model,Column, DataType, Table } from "sequelize-typescript";

@Table
export class Columndropdown extends Model<Columndropdown> {
    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue:false
    })
    delete_status: boolean;
}



