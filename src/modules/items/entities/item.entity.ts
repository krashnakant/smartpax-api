import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { GColumn } from 'src/modules/columns/entities/column.entity';
import { Group } from 'src/modules/groups/entities/group.entity';
import { User } from 'src/modules/users/entities/user.entity';

@Table
export class Item extends Model<Item> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    //--------------------many to one
    @ForeignKey(() => User)
    @Column
    user_id: number;

    @BelongsTo(() => User)
    user:User
    //--------------------

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    parent_id: number;

    @Column({
        type: DataType.ENUM,
        values: ['folder', 'dashboard','dataset','workspace','chart'],
        allowNull: false,
    })
    item_type: string;

    @HasMany(() => Group)
    groups: Group[]

    children:Item[];

    @HasMany(() => GColumn)
    columns: GColumn[]

    

}