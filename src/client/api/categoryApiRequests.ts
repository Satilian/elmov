import { BaseRequest } from './BaseRequest';

class CategoryRepo extends BaseRequest {
  getOne = (id: string) => this.get(`category/${id}`);
}

export const categoryRepo = new CategoryRepo();
