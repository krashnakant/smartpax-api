import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Item } from 'src/modules/items/entities/item.entity';

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

    rows:any[];



    // @HasMany(() => CValue)
    // cvalues: CValue[]

    // @HasMany(() => GRow)
    // grows: GRow[]

    // //----------------------many to many
    // @BelongsToMany(() => ChartSetting, () => ChartSettingGroup)
    // chartsettings: ChartSetting[];
    // //--------------------

}