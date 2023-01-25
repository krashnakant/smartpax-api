import { BelongsTo, Column, ForeignKey, Model, DataType, Table } from "sequelize-typescript";
import { Defaultcolumn } from "src/modules/defaultcolumns/entities/defaultcolumn.entity";
import { User } from "src/modules/users/entities/user.entity";

@Table
export class Defaultcolumnperson extends Model<Defaultcolumnperson> {
    //--------------------many to one
    @ForeignKey(() => Defaultcolumn)
    @Column
    default_column_id: number;

    @BelongsTo(() => Defaultcolumn)
    default_column:Defaultcolumn
    //--------------------

    //--------------------many to one
    @ForeignKey(() => User)
    @Column
    user_id: number;

    @BelongsTo(() => User)
    user:User
    //--------------------

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue:false
    })
    delete_status: boolean;
}


