import { BaseRequest } from './BaseRequest';

class AuthRepo extends BaseRequest {
  constructor() {
    super('/api/auth/');
  }

  signup = (body: any) => this.post('create', body);
}

export const authRepo = new AuthRepo();
