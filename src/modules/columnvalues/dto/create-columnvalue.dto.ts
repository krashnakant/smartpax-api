export class CreateColumnvalueDto {
    readonly column_id: number;
    readonly group_id: number;
    readonly row_id: number;
    readonly value: string;
    readonly color_code?:string;
}
