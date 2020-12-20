import {Field, Int, ObjectType} from "@nestjs/graphql";
import {UserModel} from "../user/user.model";
import {EventModel} from "../event/event.model";

@ObjectType()
export class Button{
    @Field(returns => String)
    title: string;

    @Field(returns => String)
    icon: string;

    @Field(returns => String)
    color: string;
}

@ObjectType()
export class Table{
    @Field(returns => String)
    name: string;

    @Field(returns => String)
    description: string;
}

@ObjectType()
export class OrganisationModel{
    @Field(returns => Int)
    id: number;
    @Field(returns => String)
    name: string
    @Field(returns => UserModel)
    owner: UserModel
    @Field(returns => Int)
    ownerId: number
    @Field(returns => [UserModel])
    users: UserModel[]

    @Field(returns => [Button])
    buttons: Button[]

    @Field(returns => [Table])
    tables: Table[];

    @Field(returns => [EventModel])
    events: EventModel[]

    @Field(returns => Date)
    createdAt: Date;
}