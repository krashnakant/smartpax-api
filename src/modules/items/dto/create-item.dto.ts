export class CreateItemDto {
    readonly name: string;
    readonly user_id: number;
    readonly parent_id: number;
    readonly item_type: string;
}
