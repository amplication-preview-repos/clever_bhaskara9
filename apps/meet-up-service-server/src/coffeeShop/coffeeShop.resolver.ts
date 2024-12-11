import * as graphql from "@nestjs/graphql";
import { CoffeeShopResolverBase } from "./base/coffeeShop.resolver.base";
import { CoffeeShop } from "./base/CoffeeShop";
import { CoffeeShopService } from "./coffeeShop.service";

@graphql.Resolver(() => CoffeeShop)
export class CoffeeShopResolver extends CoffeeShopResolverBase {
  constructor(protected readonly service: CoffeeShopService) {
    super(service);
  }
}
