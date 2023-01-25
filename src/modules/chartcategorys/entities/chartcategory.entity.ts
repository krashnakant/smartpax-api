import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';

@Table
export class Chartcategory extends Model<Chartcategory> {

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    category_name: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue:false
    })
    delete_status: boolean;

}