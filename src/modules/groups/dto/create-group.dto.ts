export class CreateGroupDto {
    readonly name: string;
    readonly item_id: number;
    readonly columns: any[];
    readonly rows:any[];
    readonly isOpen:boolean;
    readonly color:string;
    readonly delete_status?:boolean;
}

