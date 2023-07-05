import {Controller} from '@nestjs/common';
import {AppService} from './hotel/hotel.service';
import {
	AddRequest,
	AddResponse,
	DeleteRequest,
	DeleteResponse,
	GetRequest,
	GetResponse,
	HOTEL_CR_UD_SERVICE_NAME,
	Hotel,
	HotelCRUDServiceController,
	UpdateRequest,
	UpdateResponse,
	HotelCRUDServiceControllerMethods,
	STATUS,
	PendingHotelResponse,
	PendingHotelRequest,
	ApproveHotelRequest,
	ApproveHotelResponse
} from './stubs/hotel/v1alpha/hotel';
import {
	MakeMerchantRequest,
	User,
} from './stubs/user/v1alpha/message';
import {GrpcMethod, RpcException} from '@nestjs/microservices';
import {Metadata} from '@grpc/grpc-js';
import {CreateHotelDto} from "./dto/create-hotel";
import {validate, ValidatorOptions} from 'class-validator';
import {plainToInstance} from "class-transformer";
import {status as RpcStatus} from '@grpc/grpc-js';
import {Prisma} from '@prisma/client';

@Controller()
@HotelCRUDServiceControllerMethods()
export class AppController implements HotelCRUDServiceController {

	constructor(private readonly appService: AppService
	) {
	}

	async get(request: GetRequest, metadata?: Metadata): Promise<GetResponse> {
		let hotel: Hotel;
		let hotels: Hotel[] = [];

		if (request.id) {
			const hotel = await this.appService.findById(request.id);
			return {Hotels: [hotel] as any};
		} else {
			hotels = await this.appService.findAll();
			return {Hotels: hotels as any};
		}
	}

	async pendingHotel(request: PendingHotelRequest, metadata?: Metadata): Promise<PendingHotelResponse> {
		let hotel: Hotel;
		let hotels: Hotel[] = [];
		if (request.id) {
			const hotel = await this.appService.findById(request.id);
			return {hotels: [hotel]};
		} else {
			hotels = await this.appService.pendingHotel();
			return {hotels: hotels};
		}
	}

	async update(
		request: UpdateRequest,
		metadata?: Metadata,
	): Promise<UpdateResponse> {
		const {id, status, ...rest} = request;
		const convertedStatus = STATUS[status] || STATUS.UNRECOGNIZED;

		const cleanedRequest = {
			...rest,
			...(convertedStatus && {status: convertedStatus}),
		};

		const hotel = await this.appService.update(id, cleanedRequest as Prisma.HotelUpdateInput);
		return {hotel};
	}


	async delete(
		request: DeleteRequest,
		metadata?: Metadata,
	): Promise<DeleteResponse> {
		const hotel = await this.appService.delete(request.id);
		return {hotel};
	}

	async approveHotel(
		request: ApproveHotelRequest,
		metadata?: Metadata,
	): Promise<ApproveHotelResponse> {
		const status = STATUS[1]
		console.log("status",status)
		let hotel
		try {
			hotel = await this.appService.update(request.id, {status} as any);
		}
		catch (e) {
			throw new RpcException('Hotel does exist');
		}
		return {hotel};
	}

	@GrpcMethod(HOTEL_CR_UD_SERVICE_NAME)
	async add(request: AddRequest): Promise<AddResponse> {
		try {
			const dto: CreateHotelDto = await this.validateDto(request, CreateHotelDto);
			const hotel = await this.appService.create(request as any);

			return {hotel};
		} catch (e) {
			throw new RpcException(e);
		}

	}

	private async validateDto(
		data: any,
		Dto: any,
		validatorOptions?: ValidatorOptions,
	) {
		const dto = plainToInstance(Dto, data);
		const errors = await validate(dto, validatorOptions);

		if (errors.length > 0) {
			throw new RpcException({
				code: RpcStatus.INVALID_ARGUMENT,
				message: errors
					.map(
						({value, property, constraints}) =>
							`${value} is not a valid ${property} value (${Object.values(
								constraints,
							).join(', ')})`,
					)
					.join('\n'),
			});
		}
		return dto as typeof Dto;
	}
}