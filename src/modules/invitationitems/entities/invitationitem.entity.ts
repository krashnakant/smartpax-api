import { Column, ForeignKey, Model, Table, DataType } from "sequelize-typescript";
import { BelongsTo } from "sequelize-typescript/dist/associations/belongs-to/belongs-to";
import { Invitation } from "src/modules/invitations/entities/invitation.entity";
import { Item } from "src/modules/items/entities/item.entity";

@Table
export class Invitationitem extends Model<Invitationitem> {
    @ForeignKey(() => Item)
    @Column
    item_id?: number;

    @BelongsTo(() => Item)
    item?:Item

    @ForeignKey(() => Invitation)
    @Column
    invitation_id?: number;

    @BelongsTo(() => Invitation)
    invitation?:Invitation

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue:false
    })
    delete_status?: boolean;
}