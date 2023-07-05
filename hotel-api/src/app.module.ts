import { Module } from '@nestjs/common';
import { GrpcReflectionModule } from 'nestjs-grpc-reflection';
import { AppController } from './app.controller';
import { AppService } from './hotel/hotel.service';
import grpcConfig, { userGrpcOptions } from "./grpc.option";
import { ConfigModule, ConfigService } from '@nestjs/config';
import {PrismaService} from "./primsa.service";
import {UserModule} from "./user/user.module";
import {UserService} from "./user/user.service";
import { USER_V1ALPHA_PACKAGE_NAME } from './stubs/user/v1alpha/service';
import {ClientsModule} from "@nestjs/microservices";

@Module({
  imports: [
    GrpcReflectionModule.registerAsync({
      imports: [ConfigModule],
      useFactory: grpcConfig,
      inject: [ConfigService],
    }),
    ClientsModule.registerAsync([
      {
        name: USER_V1ALPHA_PACKAGE_NAME,
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (cs: ConfigService) => userGrpcOptions(cs),
      },
    ]),
      UserModule
  ],  controllers: [AppController],
  providers: [AppService, UserService, PrismaService],
})
export class AppModule {}
