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
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CoffeeShopOrderByInput } from "./CoffeeShopOrderByInput";

@ArgsType()
class CoffeeShopFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CoffeeShopWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CoffeeShopWhereInput, { nullable: true })
  @Type(() => CoffeeShopWhereInput)
  where?: CoffeeShopWhereInput;

  @ApiProperty({
    required: false,
    type: [CoffeeShopOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CoffeeShopOrderByInput], { nullable: true })
  @Type(() => CoffeeShopOrderByInput)
  orderBy?: Array<CoffeeShopOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CoffeeShopFindManyArgs as CoffeeShopFindManyArgs };
