import { BaseRequest } from './BaseRequest';

class CategoryRepo extends BaseRequest {
  getOne = (id: string) => this.get(`category/${id}`);

  fetchAll = () => this.get('categories/findAll');
}

export const categoryRepo = new CategoryRepo();
