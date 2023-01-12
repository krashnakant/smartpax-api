import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    readonly user_id: string;
    readonly firstname: string;
    readonly lastname: string;
    readonly email: string;
    readonly user_type: string;
}
