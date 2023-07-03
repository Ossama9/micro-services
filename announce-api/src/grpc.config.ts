import {
	ClientProviderOptions,
	GrpcOptions,
	Transport,
} from '@nestjs/microservices';
import { ANNOUNCE_V1ALPHA_PACKAGE_NAME } from './stubs/announce/v1alpha/announce';
import { join } from 'path';
import { addReflectionToGrpcConfig } from 'nestjs-grpc-reflection';

import { ConfigService } from '@nestjs/config';

export const grpcConfig = (cs: ConfigService): GrpcOptions =>
	addReflectionToGrpcConfig({
		transport: Transport.GRPC,
		options: {
			url: `0.0.0.0:6001`,
			package: ANNOUNCE_V1ALPHA_PACKAGE_NAME,
			protoPath: join(__dirname, 'proto/announce/v1alpha/announce.proto'),
		},
	});

