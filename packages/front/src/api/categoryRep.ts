import { BaseRequest } from "./BaseRequest";

export class CategoryRep extends BaseRequest {
  constructor() {
    super(process.env.API_URL);
  }

  fetchTree = () => this.get("category/getTree");
}

export const categoryRep = new CategoryRep();
