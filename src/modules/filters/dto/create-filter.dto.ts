export class CreateFilterDto {
    readonly condition_type: string;
    readonly column_id: number;
    readonly item_id: number;
    readonly value: string;
    readonly delete_status?:boolean;
}
