import {Field, ObjectType} from "@nestjs/graphql";
import {Button, Table} from "../organisation/organisation.model";

@ObjectType()
export class EventModel{
    @Field(returns => String)
    id: string

    @Field(returns => Table)
    table: Table

    @Field(returns => Button)
    button: Button

    @Field(returns => Date)
    createdAt: Date
}