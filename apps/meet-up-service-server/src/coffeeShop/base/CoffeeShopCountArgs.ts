/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CoffeeShopWhereInput } from "./CoffeeShopWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class CoffeeShopCountArgs {
  @ApiProperty({
    required: false,
    type: () => CoffeeShopWhereInput,
  })
  @Field(() => CoffeeShopWhereInput, { nullable: true })
  @Type(() => CoffeeShopWhereInput)
  where?: CoffeeShopWhereInput;
}

export { CoffeeShopCountArgs as CoffeeShopCountArgs };
