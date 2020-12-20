import {Mutation, Query, Resolver} from "@nestjs/graphql";

@Resolver()
export class AuthResolver{

    @Query(returns => String)
    me(){
        return 'ME';
    }

    // @Mutation()
    // registration(){
    //
    // }
    //
    // @Mutation()
    // login(){
    //
    // }
}