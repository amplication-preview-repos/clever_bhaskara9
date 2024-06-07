import { Module } from "@nestjs/common";
import { CoffeeShopModuleBase } from "./base/coffeeShop.module.base";
import { CoffeeShopService } from "./coffeeShop.service";
import { CoffeeShopController } from "./coffeeShop.controller";
import { CoffeeShopResolver } from "./coffeeShop.resolver";

@Module({
  imports: [CoffeeShopModuleBase],
  controllers: [CoffeeShopController],
  providers: [CoffeeShopService, CoffeeShopResolver],
  exports: [CoffeeShopService],
})
export class CoffeeShopModule {}
