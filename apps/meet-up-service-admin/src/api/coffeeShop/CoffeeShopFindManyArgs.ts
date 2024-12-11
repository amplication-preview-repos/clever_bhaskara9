import { CoffeeShopWhereInput } from "./CoffeeShopWhereInput";
import { CoffeeShopOrderByInput } from "./CoffeeShopOrderByInput";

export type CoffeeShopFindManyArgs = {
  where?: CoffeeShopWhereInput;
  orderBy?: Array<CoffeeShopOrderByInput>;
  skip?: number;
  take?: number;
};
