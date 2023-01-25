import { Table, Column, Model, DataType, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { User } from 'src/modules/users/entities/user.entity';

@Table
export class Invitation extends Model<Invitation> {
    @ForeignKey(() => User)
    @Column
    sender_id: number;

    @BelongsTo(() => User)
    sender:User

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    invitation_email: string;

    @Column({
        type: DataType.ENUM,
        values: ['write', 'read'],
        allowNull: false,
    })
    permission_type: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue:false
    })
    delete_status: boolean;
}