import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { BelongsTo } from 'sequelize-typescript/dist/associations/belongs-to/belongs-to';
import { ForeignKey } from 'sequelize-typescript/dist/associations/foreign-key/foreign-key';
import { ChartType } from 'src/modules/charttypes/entities/charttype.entity';
import { Item } from 'src/modules/items/entities/item.entity';


@Table
export class Chart extends Model<Chart> {

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    chart_name: string;

    //--------------------many to one
    @ForeignKey(() => ChartType)
    @Column
    chart_type?: number;

    @BelongsTo(() => ChartType)
    category?:ChartType
    //--------------------

    //--------------------one to one
    @ForeignKey(() => Item)
    @Column
    item_id?: number;

    @BelongsTo(() => Item)
    item?:Item
    //--------------------

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue:false
    })
    delete_status?: boolean;

}