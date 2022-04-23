import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  id: number;
  email: string;
  phone?: string;
  login?: string;
  firstName?: string;
  lastName?: string;
}
