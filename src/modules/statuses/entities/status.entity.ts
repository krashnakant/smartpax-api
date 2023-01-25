import { Column, DataType, Table, Model, HasMany, BelongsToMany } from "sequelize-typescript";
import { GColumn } from "src/modules/columns/entities/column.entity";
import { Defaultcolumn } from "src/modules/defaultcolumns/entities/defaultcolumn.entity";
import { Defaultcolumnstatus } from "src/modules/defaultcolumnstatuses/entities/defaultcolumnstatus.entity";
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

    @HasMany(() => GColumn)
    columns: GColumn[]

    //----------------------many to many
    @BelongsToMany(() => Defaultcolumn, () => Defaultcolumnstatus)
    statuses: Defaultcolumnstatus[];
    //--------------------

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue:false
    })
    delete_status: boolean;
}
