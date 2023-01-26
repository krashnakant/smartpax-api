import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Dropdown } from 'src/modules/dropdowns/entities/dropdown.entity';
import { User } from 'src/modules/users/entities/user.entity';

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

    //--------------------one to one
    @ForeignKey(() => Dropdown)
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    dropdown_id?: number;

    @BelongsTo(() => Dropdown)
    dropdown?:Dropdown
    //--------------------

    //--------------------one to one
    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    admin_id?: number;

    @BelongsTo(() => User)
    admin?:User
    //--------------------

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue:false
    })
    delete_status?: boolean;

    // //----------------------many to many
    // @BelongsToMany(() => Dropdown, () => Defaultcolumndropdown)
    // dropdowns: Defaultcolumndropdown[];
    // //--------------------

    // //----------------------many to many
    // @BelongsToMany(() => User, () => Defaultcolumnperson)
    // people: Defaultcolumnperson[];
    // //--------------------

    // //----------------------many to many
    // @BelongsToMany(() => Status, () => Defaultcolumnstatus)
    // status: Defaultcolumnstatus[];
    // //--------------------
}