export class CreateUserDto {
    readonly user_id: string;
    readonly firstname: string;
    readonly lastname: string;
    readonly email: string;
    readonly user_type: string;
    readonly delete_status?:boolean;
}
