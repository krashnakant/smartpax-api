import { Table, Column, Model, DataType, HasMany, BelongsToMany } from 'sequelize-typescript';
import { Defaultcolumnperson } from 'src/modules/defaultcolumnpeople/entities/defaultcolumnperson.entity';
import { Defaultcolumn } from 'src/modules/defaultcolumns/entities/defaultcolumn.entity';
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

    //----------------------many to many
    @BelongsToMany(() => Defaultcolumn, () => Defaultcolumnperson)
    dropdowns: Defaultcolumnperson[];
    //--------------------

}