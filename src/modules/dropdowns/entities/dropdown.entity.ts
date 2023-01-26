import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { GColumn } from "src/modules/columns/entities/column.entity";
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
    dropdownvalues?: Dropdownvalue[]

    @HasMany(() => GColumn)
    columns?: GColumn[]

    @HasMany(() => Defaultcolumn)
    dropdowns?: Defaultcolumn[]

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue:false
    })
    delete_status?: boolean;
}
