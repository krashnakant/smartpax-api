import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';

@Table
export class Chartcategory extends Model<Chartcategory> {

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    category_name: string;

}