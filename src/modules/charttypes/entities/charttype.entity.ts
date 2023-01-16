import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { BelongsTo } from 'sequelize-typescript/dist/associations/belongs-to/belongs-to';
import { ForeignKey } from 'sequelize-typescript/dist/associations/foreign-key/foreign-key';
import { Chartcategory } from 'src/modules/chartcategorys/entities/chartcategory.entity';

@Table
export class ChartType extends Model<ChartType> {

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    type_name: string;

    //--------------------many to one
    @ForeignKey(() => Chartcategory)
    @Column
    category_id: number;

    @BelongsTo(() => Chartcategory)
    category:Chartcategory;
    //--------------------
}
