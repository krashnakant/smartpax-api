import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Defaultcolumndropdown } from "src/modules/defaultcolumndropdowns/entities/defaultcolumndropdown.entity";
import { Defaultcolumn } from "src/modules/defaultcolumns/entities/defaultcolumn.entity";
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

    //----------------------many to many
    @BelongsToMany(() => Defaultcolumn, () => Defaultcolumndropdown)
    dropdowns: Defaultcolumndropdown[];
    //--------------------
}