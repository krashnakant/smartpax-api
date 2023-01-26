export class CreateColumnDto {
    readonly column_name:string;
    readonly datatype:string;
    readonly item_id:number;
    readonly hidden?:boolean;
    readonly order?:number;
    readonly formula?:string;
    readonly unit_position?:string;
    readonly unit?:string;
    readonly delete_status?:boolean;
    readonly formula_value?:string;
}
