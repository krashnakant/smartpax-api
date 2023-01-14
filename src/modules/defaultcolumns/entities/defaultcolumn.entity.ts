import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { Defaultcolumndropdown } from 'src/modules/defaultcolumndropdowns/entities/defaultcolumndropdown.entity';
import { Defaultcolumnperson } from 'src/modules/defaultcolumnpeople/entities/defaultcolumnperson.entity';
import { Defaultcolumnstatus } from 'src/modules/defaultcolumnstatuses/entities/defaultcolumnstatus.entity';
import { Dropdown } from 'src/modules/dropdowns/entities/dropdown.entity';
import { Status } from 'src/modules/statuses/entities/status.entity';
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

    //----------------------many to many
    @BelongsToMany(() => Dropdown, () => Defaultcolumndropdown)
    dropdowns: Defaultcolumndropdown[];
    //--------------------

    //----------------------many to many
    @BelongsToMany(() => User, () => Defaultcolumnperson)
    people: Defaultcolumnperson[];
    //--------------------

    //----------------------many to many
    @BelongsToMany(() => Status, () => Defaultcolumnstatus)
    status: Defaultcolumnstatus[];
    //--------------------
}