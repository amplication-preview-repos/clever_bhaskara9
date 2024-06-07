import { CoffeeShop as TCoffeeShop } from "../api/coffeeShop/CoffeeShop";

export const COFFEESHOP_TITLE_FIELD = "id";

export const CoffeeShopTitle = (record: TCoffeeShop): string => {
  return record.id?.toString() || String(record.id);
};
