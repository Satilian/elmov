import { BaseRequest } from "./BaseRequest";

export class CategoryRep extends BaseRequest {
  constructor() {
    super();
  }

  fetchTree = () => this.get("category/getTree");
}

export const categoryRep = new CategoryRep();
