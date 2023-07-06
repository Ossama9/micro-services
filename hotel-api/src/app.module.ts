import {Module} from '@nestjs/common';
import {GrpcReflectionModule} from 'nestjs-grpc-reflection';
import {AppController} from './app.controller';
import {AppService} from './hotel/hotel.service';
import {grpcConfig} from "./grpc.option";
import {ConfigModule, ConfigService} from '@nestjs/config';
import {PrismaService} from "./primsa.service";
import {UserAppService} from "./app.service";

@Module({
	imports: [
		GrpcReflectionModule.registerAsync({
			imports: [ConfigModule],
			useFactory: grpcConfig,
			inject: [ConfigService],
		})
	], controllers: [AppController],
	providers: [AppService, UserAppService, PrismaService],
})
export class AppModule {
}
