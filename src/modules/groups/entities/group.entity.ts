import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Item } from 'src/modules/items/entities/item.entity';
import { Row } from 'src/modules/rows/entities/row.entity';

@Table
export class Group extends Model<Group> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;

    //--------------------one to one
    @ForeignKey(() => Item)
    @Column
    item_id: number;

    @BelongsTo(() => Item)
    item:Item
    //--------------------

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    color: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    isOpen: boolean;

    @HasMany(() => Row)
    rows: Row[]

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue:false
    })
    delete_status: boolean;


    // @HasMany(() => CValue)
    // cvalues: CValue[]

    // @HasMany(() => GRow)
    // grows: GRow[]

    // //----------------------many to many
    // @BelongsToMany(() => ChartSetting, () => ChartSettingGroup)
    // chartsettings: ChartSetting[];
    // //--------------------

}