import {Field, Int, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class UserModel{
    @Field(returns => Int  )
    id: number;
    @Field(returns => String)
    email: string;
    @Field(returns => String)
    password: string;
    @Field(returns => String)
    firstName: string;
    @Field(returns => String)
    lastName: string;
    // ownedOrganisations:
    // organisations
    @Field(returns => Date)
    createdAt: Date;
}