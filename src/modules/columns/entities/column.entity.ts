import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table
export class GColumn extends Model<GColumn> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    column_name: string;

    @Column({
        type: DataType.ENUM,
        values: ['text', 'integer','date','status','dropdown','people','formula'],
        allowNull: false,
    })
    datatype: string;
}



