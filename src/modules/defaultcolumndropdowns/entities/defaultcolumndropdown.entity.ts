import { BelongsTo, Column, ForeignKey, DataType, Model, Table } from "sequelize-typescript";
import { GColumn } from "src/modules/columns/entities/column.entity";
import { Defaultcolumn } from "src/modules/defaultcolumns/entities/defaultcolumn.entity";
import { Dropdown } from "src/modules/dropdowns/entities/dropdown.entity";

@Table
export class Defaultcolumndropdown extends Model<Defaultcolumndropdown> {
    //--------------------many to one
    @ForeignKey(() => Defaultcolumn)
    @Column({
        allowNull: true
    })
    default_column_id?: number;

    @BelongsTo(() => Defaultcolumn)
    default_column?:Defaultcolumn
    //--------------------

    //--------------------many to one
    @ForeignKey(() => Dropdown)
    @Column({
        allowNull: true
    })
    dropdown_id?: number;

    @BelongsTo(() => Dropdown)
    dropdown?:Dropdown
    //--------------------

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue:false
    })
    delete_status?: boolean;
}


