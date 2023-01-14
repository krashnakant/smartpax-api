import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Dropdownvalue } from "src/modules/dropdownvalues/entities/dropdownvalue.entity";

@Table
export class Dropdown extends Model<Dropdown> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @HasMany(() => Dropdownvalue)
    dropdownvalues: Dropdownvalue[]
}
