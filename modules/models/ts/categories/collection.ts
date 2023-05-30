import { Collection } from "@beyond-js/reactive-2/entities";
import { Category } from "./item";

export /*bundle */ class Categories extends Collection {
  item = Category;
  protected storeName = "category";
  protected db = "airooms";
  constructor() {
    super();
    this.init();
  }
}
