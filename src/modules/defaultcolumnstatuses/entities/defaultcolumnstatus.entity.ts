import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Defaultcolumn } from "src/modules/defaultcolumns/entities/defaultcolumn.entity";
import { Status } from "src/modules/statuses/entities/status.entity";

@Table
export class Defaultcolumnstatus extends Model<Defaultcolumnstatus> {
    //--------------------many to one
    @ForeignKey(() => Defaultcolumn)
    @Column
    default_column_id: number;

    @BelongsTo(() => Defaultcolumn)
    default_column:Defaultcolumn
    //--------------------

    //--------------------many to one
    @ForeignKey(() => Status)
    @Column
    status_id: number;

    @BelongsTo(() => Status)
    status:Status
    //--------------------
}

