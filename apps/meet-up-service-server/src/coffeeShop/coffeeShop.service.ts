import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CoffeeShopServiceBase } from "./base/coffeeShop.service.base";

@Injectable()
export class CoffeeShopService extends CoffeeShopServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
