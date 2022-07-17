import { PageDto } from "interfaces/page";
import { BaseRequest } from "./BaseRequest";

export class ProductRep extends BaseRequest {
  constructor() {
    super(process.env.API_URL);
  }

  fetchByCategory = async (path: PageDto["path"]) => {
    const res = await this.get(`product/getByPage?path=${path}`);
    console.log(res);
    return res;
  };
}

export const productRep = new ProductRep();
