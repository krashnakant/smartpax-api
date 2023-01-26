import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { BelongsTo } from 'sequelize-typescript/dist/associations/belongs-to/belongs-to';
import { ForeignKey } from 'sequelize-typescript/dist/associations/foreign-key/foreign-key';
import { Chartsetting } from 'src/modules/chartsettings/entities/chartsetting.entity';



@Table
export class Benchmark extends Model<Benchmark> {

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    value: string;

    //--------------------many to one
    @ForeignKey(() => Chartsetting)
    @Column
    chart_setting_id?: number;

    @BelongsTo(() => Chartsetting)
    chart_setting?:Chartsetting
    //--------------------

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    label: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    color_code: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue:false
    })
    delete_status?: boolean;

}