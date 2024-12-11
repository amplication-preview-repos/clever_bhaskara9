import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CoffeeShopService } from "./coffeeShop.service";
import { CoffeeShopControllerBase } from "./base/coffeeShop.controller.base";

@swagger.ApiTags("coffeeShops")
@common.Controller("coffeeShops")
export class CoffeeShopController extends CoffeeShopControllerBase {
  constructor(protected readonly service: CoffeeShopService) {
    super(service);
  }
}
