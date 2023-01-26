import { BelongsTo, Column, DataType, ForeignKey, Table, Model } from "sequelize-typescript";
import { Status } from "src/modules/statuses/entities/status.entity";

@Table
export class Statusvalue extends Model<Statusvalue> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    status_value: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    color_code: string;

    //--------------------one to one
    @ForeignKey(() => Status)
    @Column
    status_id?: number;

    @BelongsTo(() => Status)
    status?:Status
    //--------------------

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue:false
    })
    delete_status?: boolean;
}
