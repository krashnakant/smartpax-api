import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { GColumn } from 'src/modules/columns/entities/column.entity';
import { Group } from 'src/modules/groups/entities/group.entity';
import { Row } from 'src/modules/rows/entities/row.entity';


@Table
export class Columnvalue extends Model<Columnvalue> {

    //--------------------many to one
    @ForeignKey(() => GColumn)
    @Column
    column_id: number;

    @BelongsTo(() => GColumn)
    column:GColumn
    //--------------------

    //--------------------many to one
    @ForeignKey(() => Group)
    @Column
    group_id: number;

    @BelongsTo(() => Group)
    group:Group
    //--------------------

    //--------------------many to one
    @ForeignKey(() => Row)
    @Column
    row_id: number;

    @BelongsTo(() => Row)
    row:Row
    //--------------------

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    value: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    color_code?: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue:false
    })
    delete_status: boolean;
}