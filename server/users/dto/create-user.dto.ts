export class CreateUserDto {
  password: string;
  email: string;
  phone?: string;
  login?: string;
  firstName?: string;
  lastName?: string;
}
