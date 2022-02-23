import { BaseRequest } from './BaseRequest';

export class CategoryApiRequests extends BaseRequest {
  getOne = (id: string) => this.get(`category/${id}`);
}
