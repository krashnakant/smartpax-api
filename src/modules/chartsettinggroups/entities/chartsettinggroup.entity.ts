import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { BelongsTo } from 'sequelize-typescript/dist/associations/belongs-to/belongs-to';
import { ForeignKey } from 'sequelize-typescript/dist/associations/foreign-key/foreign-key';
import { Chartsetting } from 'src/modules/chartsettings/entities/chartsetting.entity';
import { Group } from 'src/modules/groups/entities/group.entity';


@Table
export class Chartsettinggroup extends Model<Chartsettinggroup> {

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    type_name: string;

    //--------------------many to one
    @ForeignKey(() => Chartsetting)
    @Column
    setting_id: number;

    @BelongsTo(() => Chartsetting)
    setting:Chartsetting
    //--------------------

    //--------------------many to one
    @ForeignKey(() => Group)
    @Column
    group_id: number;

    @BelongsTo(() => Group)
    group:Group
    //--------------------


    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue:false
    })
    delete_status: boolean;
}