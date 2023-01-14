import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Group } from "src/modules/groups/entities/group.entity";

@Table
export class Row extends Model<Row> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    order: number;

    //--------------------one to one
    @ForeignKey(() => Group)
    @Column
    group_id: number;

    @BelongsTo(() => Group)
    group:Group
    //--------------------
}
