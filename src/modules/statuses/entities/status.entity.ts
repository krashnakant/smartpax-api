import { Column, DataType, Table, Model, HasMany } from "sequelize-typescript";
import { Statusvalue } from "src/modules/statusvalues/entities/statusvalue.entity";

@Table
export class Status extends Model<Status> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @HasMany(() => Statusvalue)
    statusvalues: Statusvalue[]
}
