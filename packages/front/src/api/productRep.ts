import { PageDto } from "interfaces/page";
import { BaseRequest } from "./BaseRequest";

export class ProductRep extends BaseRequest {
  constructor() {
    super(process.env.API_URL);
  }

  fetchByCategory = (path: PageDto["path"]) => this.get(`product/getByPage?path=${path}`);

  fetchProduct = (path: PageDto["path"]) => this.get(`product/getProduct?path=${path}`);
}

export const productRep = new ProductRep();
