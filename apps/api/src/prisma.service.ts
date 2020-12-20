import { PrismaClient } from '@prisma/client';
import {Injectable, OnModuleInit} from "@nestjs/common";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{
    onModuleInit(): any {
        this.$connect();
    }
}