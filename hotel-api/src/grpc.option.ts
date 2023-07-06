import {
	ClientProviderOptions,
	GrpcOptions,
	Transport,
} from '@nestjs/microservices';
import {HOTEL_V1ALPHA_PACKAGE_NAME} from './stubs/hotel/v1alpha/hotel';
import {join} from 'path';
import {addReflectionToGrpcConfig} from 'nestjs-grpc-reflection';
import {
	USER_SERVICE_NAME,
	USER_V1ALPHA_PACKAGE_NAME,
} from './stubs/user/v1alpha/service';
import {ChannelCredentials} from '@grpc/grpc-js';
import {ConfigService} from '@nestjs/config';

export const grpcConfig = (cs: ConfigService): GrpcOptions =>
	addReflectionToGrpcConfig({
		transport: Transport.GRPC,
		options: {
			url: `0.0.0.0:6000`,
			package: HOTEL_V1ALPHA_PACKAGE_NAME,
			protoPath: join(__dirname, 'proto/hotel/v1alpha/hotel.proto'),
		},
	});




