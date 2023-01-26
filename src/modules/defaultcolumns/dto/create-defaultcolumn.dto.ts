export class CreateDefaultcolumnDto {
    readonly column_name:string;
    readonly datatype:string;
    readonly admin_id:number;  
    readonly delete_status?:boolean; 
}
