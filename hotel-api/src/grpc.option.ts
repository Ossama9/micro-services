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
import {readFileSync} from "fs";


export default (cs: ConfigService): GrpcOptions => {
	return addReflectionToGrpcConfig({
		transport: Transport.GRPC,
		options: {
			package: HOTEL_V1ALPHA_PACKAGE_NAME,
			url: `0.0.0.0:6000`,
			loader: {
				includeDirs: [join(__dirname, '../proto')],
			},
			protoPath: join(__dirname, 'proto/hotel/v1alpha/hotel.proto'),
		},
	});
};

export const userGrpcOptions = (cs: ConfigService): ClientProviderOptions => ({
	name: USER_V1ALPHA_PACKAGE_NAME,
	transport: Transport.GRPC,
	options: {
		url: cs.get('USER_API_URL'),
		package: USER_V1ALPHA_PACKAGE_NAME,
		loader: {
			includeDirs: [join(__dirname, '../proto')],
		},
		protoPath: [join(__dirname, 'proto/user/v1alpha/service.proto')],
		keepalive: {
			// Send keepalive pings every 10 seconds, default is 2 hours.
			keepaliveTimeMs: 10 * 1000,
			// Keepalive ping timeout after 5 seconds, default is 20 seconds.
			keepaliveTimeoutMs: 5 * 1000,
			// Allow keepalive pings when there are no gRPC calls.
			keepalivePermitWithoutCalls: 1,
		},
		credentials: !cs.get<boolean>('insecure')
			? ChannelCredentials.createSsl(
				readFileSync(cs.get('ROOT_CA')),
				readFileSync(cs.get('AUTH_KEY')),
				readFileSync(cs.get('AUTH_CERT')),
			)
			: ChannelCredentials.createInsecure(),
	},
});
