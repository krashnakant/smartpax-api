import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Dropdown } from "src/modules/dropdowns/entities/dropdown.entity";

@Table
export class Dropdownvalue extends Model<Dropdownvalue> {

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    dropdown_value: string;

    //--------------------one to one
    @ForeignKey(() => Dropdown)
    @Column
    dropdown_id: number;

    @BelongsTo(() => Dropdown)
    dropdown:Dropdown
    //--------------------
}
