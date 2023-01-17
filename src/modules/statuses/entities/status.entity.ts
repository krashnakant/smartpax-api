import { Column, DataType, Table, Model, HasMany, BelongsToMany } from "sequelize-typescript";
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

    //----------------------many to many
    @BelongsToMany(() => Defaultcolumn, () => Defaultcolumnstatus)
    statuses: Defaultcolumnstatus[];
    //--------------------
}