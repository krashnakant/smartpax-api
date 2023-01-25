export class CreateSortDto {
    readonly sort_type: string;
    readonly column_id: number;
    readonly item_id: number;
    readonly delete_status?:boolean;
}
