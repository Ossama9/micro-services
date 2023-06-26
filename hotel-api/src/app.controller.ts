import {Controller} from '@nestjs/common';
import {AppService} from './app.service';
import {
	AddRequest,
	AddResponse,
	// DeleteRequest,
	// DeleteResponse,
	GetRequest,
	GetResponse,
	HOTEL_CR_UD_SERVICE_NAME,
	Hotel,
	HotelCRUDServiceController,
	// UpdateRequest,
	// UpdateResponse,
	HotelCRUDServiceControllerMethods,
} from './stubs/hotel/v1alpha/hotel';
import {GrpcMethod} from '@nestjs/microservices';
import {Metadata} from '@grpc/grpc-js';

@Controller()
@HotelCRUDServiceControllerMethods()
export class AppController implements HotelCRUDServiceController {
	constructor(private readonly appService: AppService) {
	}

	async get(request: GetRequest, metadata?: Metadata): Promise<GetResponse> {
		let hotel: Hotel;
		let hotels: Hotel[] = [];

		if (request.id) {
			hotel = await this.appService.findById(request.id);
			return {Hotels: [hotel]};
		}
	}

	// async update(
	//     request: UpdateRequest,
	//     metadata?: Metadata,
	// ): Promise<UpdateResponse> {
	//   const id = request.id;
	//
	//   Object.keys(request).forEach(
	//       (key) => request[key] === undefined && delete request[key],
	//   );
	//
	//   delete request.id;
	//
	//   const hotel = await this.appService.update(id, request);
	//
	//   return { hotel };
	// }
	// async delete(
	//     request: DeleteRequest,
	//     metadata?: Metadata,
	// ): Promise<DeleteResponse> {
	//   const hotel = await this.appService.delete(request.id);
	//
	//   return { hotel };
	// }

	@GrpcMethod(HOTEL_CR_UD_SERVICE_NAME)
	async add(request: AddRequest): Promise<AddResponse> {
	  const hotel = await this.appService.create(request as any);

	  return { hotel };
	}
}