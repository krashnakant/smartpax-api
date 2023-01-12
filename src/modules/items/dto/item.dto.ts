import { Item } from "../entities/item.entity";

export class ItemDto {
    readonly name: string;
    readonly user_id: number;
    readonly parent_id: number;
    readonly item_type: string;
    children?: Item[];
}
