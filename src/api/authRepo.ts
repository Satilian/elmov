import { CreateUserDto } from '../../server/users/dto/create-user.dto';
import { BaseRequest } from './BaseRequest';

class AuthRepo extends BaseRequest {
  constructor() {
    super('/api/auth/');
  }

  signup = (body: CreateUserDto) => this.post('create', body);
}

export const authRepo = new AuthRepo();
