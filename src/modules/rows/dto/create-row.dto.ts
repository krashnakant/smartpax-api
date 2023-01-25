export class CreateRowDto {
    readonly order: number;
    readonly group_id: number;
    readonly delete_status?:boolean;
}
