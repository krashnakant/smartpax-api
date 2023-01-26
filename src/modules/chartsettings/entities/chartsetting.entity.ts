import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { BelongsToMany } from 'sequelize-typescript/dist/associations/belongs-to-many/belongs-to-many';
import { BelongsTo } from 'sequelize-typescript/dist/associations/belongs-to/belongs-to';
import { ForeignKey } from 'sequelize-typescript/dist/associations/foreign-key/foreign-key';
import { Chart } from 'src/modules/charts/entities/chart.entity';
import { Item } from 'src/modules/items/entities/item.entity';



@Table
export class Chartsetting extends Model<Chartsetting> {

    //--------------------one to one
    @ForeignKey(() => Item)
    @Column
    item_id: number;

    @BelongsTo(() => Item)
    item:Item
    //--------------------

    //--------------------many to one
    @ForeignKey(() => Chart)
    @Column
    chart_id?: number;

    @BelongsTo(() => Chart)
    chart?:Chart
    //--------------------

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    xaxis: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    yaxis: string;

    @Column({
        type: DataType.ENUM,
        values: ['folder', 'dashboard','dataset','workspace','chart'],
        allowNull: false,
    })
    calculation: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    is_position: boolean;

    @Column({
        type: DataType.ENUM,
        values: ['bottom', 'top'],
        allowNull: false,
    })
    position_type: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    items_count: number;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    is_cumulative: boolean;

    @Column({
        type: DataType.ENUM,
        values: ['yasc', 'ydesc', 'xasc', 'xdesc'],
        allowNull: false,
    })
    sort_by: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    is_empty: boolean;

    @Column({
        type: DataType.ENUM,
        values: ['all', 'top', 'selected', 'null'],
        allowNull: false,
    })
    group_type: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue:false
    })
    delete_status?: boolean;

}