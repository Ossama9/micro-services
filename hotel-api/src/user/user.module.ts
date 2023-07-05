import { Module } from '@nestjs/common';
import { PrismaService } from '../primsa.service';
import { UserService } from './user.service';
import { USER_V1ALPHA_PACKAGE_NAME } from '../stubs/user/v1alpha/service';

@Module({
	providers: [UserService, PrismaService,
		{
			provide: USER_V1ALPHA_PACKAGE_NAME,
			useFactory: () => {},
		},],
	exports: [UserService],
})
export class UserModule {}
