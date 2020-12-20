import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {AuthModule} from "./modules/auth/auth.module";
import {UserModule} from "./modules/user/user.module";

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: true
    }),
    AuthModule,
    // UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}