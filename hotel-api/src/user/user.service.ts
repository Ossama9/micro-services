import {OnModuleInit} from '@nestjs/common';
import {Inject, Injectable} from '@nestjs/common';
import {
	USER_SERVICE_NAME,
	USER_V1ALPHA_PACKAGE_NAME,
	UserServiceClient,
} from '../stubs/user/v1alpha/service';
import {ClientGrpc} from '@nestjs/microservices';
import {
	MakeMerchantRequest,
	MakeMerchantResponse,
	FindRequest,
	FindResponse,
	User,
} from '../stubs/user/v1alpha/message';
import { Metadata } from '@grpc/grpc-js';
import {firstValueFrom} from "rxjs";

@Injectable()
export class UserService implements OnModuleInit {
	private userService: UserServiceClient;

	constructor(@Inject(USER_V1ALPHA_PACKAGE_NAME) private client: ClientGrpc) {
	}

	onModuleInit() {
		this.userService = this.client.getService<UserServiceClient>(USER_SERVICE_NAME);
	}

	async findUser(req: FindRequest, md: Record<string, any>): Promise<User> {
		const meta = new Metadata();
		Object.entries(md).map(([k, v]) => meta.add(k, v));
		const res: FindResponse = await firstValueFrom(
			this.userService.find(req, meta) as any,
		);

		return res.user?.[0];
	}

	async makeMerchant(req: MakeMerchantRequest, md: Record<string, any>): Promise<User> {
		const meta = new Metadata();
		Object.entries(md).map(([k, v]) => meta.add(k, v));
		const res: FindResponse = await firstValueFrom(
			this.userService.makeMerchant(req, meta) as any,
		);

		return res.user?.[0];
	}


}