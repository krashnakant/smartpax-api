import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Dropdown } from "src/modules/dropdowns/entities/dropdown.entity";
import { Item } from "src/modules/items/entities/item.entity";
import { Status } from "src/modules/statuses/entities/status.entity";
import { User } from "src/modules/users/entities/user.entity";

@Table
export class GColumn extends Model<GColumn> {
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

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    formula?: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    unit_position?: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    unit?: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    hidden: boolean;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    order: number;

    //--------------------many to one
    @ForeignKey(() => Status)
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    status_id?: number;

    @BelongsTo(() => Status)
    status?:Status
    //--------------------

    //--------------------many to one
    @ForeignKey(() => Dropdown)
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    dropdown_id?: number;

    @BelongsTo(() => Dropdown)
    dropdown?:Dropdown
    //--------------------

    //--------------------many to one
    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    user_id?: number;

    @BelongsTo(() => User)
    user?:User
    //--------------------

    //--------------------many to one
    @ForeignKey(() => Item)
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    item_id: number;

    @BelongsTo(() => Item)
    item:Item
    //--------------------


}



