import { Column, DataType, Table, Model } from "sequelize-typescript";

@Table
export class Status extends Model<Status> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;
}
