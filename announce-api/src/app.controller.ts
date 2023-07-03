import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import {
  AddRequest,
  AddResponse,
  DeleteRequest,
  DeleteResponse,
  GetRequest,
  GetResponse,
  ANNOUNCE_CR_UD_SERVICE_NAME,
  Announce,
  AnnounceCRUDServiceController,
  UpdateRequest,
  UpdateResponse,
  AnnounceCRUDServiceControllerMethods,
} from './stubs/announce/v1alpha/announce';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata } from '@grpc/grpc-js';
@Controller()
@AnnounceCRUDServiceControllerMethods()
export class AppController implements AnnounceCRUDServiceController {
  constructor(private readonly appService: AppService) {}
  async get(request: GetRequest, metadata?: Metadata): Promise<GetResponse> {
    let announce: Announce;
    let announces: Announce[] = [];
    if (request.id) {
      announce = await this.appService.findById(request.id);
      return { announces: [announce] };
    } else {
      announces = await this.appService.findAll();
      return { announces };
    }
  }
  async update(
      request: UpdateRequest,
      metadata?: Metadata,
  ): Promise<UpdateResponse> {
    const id = request.id;

    Object.keys(request).forEach(
        (key) => request[key] === undefined && delete request[key],
    );

    delete request.id;

    const announce = await this.appService.update(id, request);

    return { announce };
  }
  async delete(
      request: DeleteRequest,
      metadata?: Metadata,
  ): Promise<DeleteResponse> {
    const announce = await this.appService.delete(request.id);

    return { announce };
  }

  @GrpcMethod(ANNOUNCE_CR_UD_SERVICE_NAME)
  async add(request: AddRequest): Promise<AddResponse> {
    const announce = await this.appService.create(request as any);

    return { announce };
  }
}