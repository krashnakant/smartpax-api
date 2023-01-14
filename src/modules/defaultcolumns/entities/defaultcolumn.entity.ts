import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';

@Table
export class Defaultcolumn extends Model<Defaultcolumn> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    column_name: string;

    @Column({
        type: DataType.ENUM,
        values: ['text', 'integer','date','status','dropdown','people','formula'],
        allowNull: false,
    })
    datatype: string;
}