import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Item } from 'src/modules/items/entities/item.entity';

@Table
export class User extends Model<User> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    user_id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    firstname: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    lastname: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.ENUM,
        values: ['admin', 'user'],
        allowNull: false,
    })
    user_type: string;

    @HasMany(() => Item)
    items?: Item[]

}