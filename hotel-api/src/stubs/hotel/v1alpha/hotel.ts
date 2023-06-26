/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "hotel.v1alpha";

export interface Hotel {
  name?: string;
  id?: number;
  city?: string;
  address?: string;
}

export interface GetRequest {
  id?: number;
}

export interface GetResponse {
  Hotels?: Hotel[];
}

export interface AddRequest {
  name?: string;
  city?: string;
  address?: string;
}

export interface AddResponse {
  hotel?: Hotel;
}

export const HOTEL_V1ALPHA_PACKAGE_NAME = "hotel.v1alpha";

export interface HotelCRUDServiceClient {
  get(request: GetRequest, metadata?: Metadata): Observable<GetResponse>;

  /**
   * rpc Update (UpdateRequest) returns (UpdateResponse);
   *  rpc Delete (DeleteRequest) returns (DeleteResponse);
   */

  add(request: AddRequest, metadata?: Metadata): Observable<AddResponse>;
}

export interface HotelCRUDServiceController {
  get(request: GetRequest, metadata?: Metadata): Promise<GetResponse> | Observable<GetResponse> | GetResponse;

  /**
   * rpc Update (UpdateRequest) returns (UpdateResponse);
   *  rpc Delete (DeleteRequest) returns (DeleteResponse);
   */

  add(request: AddRequest, metadata?: Metadata): Promise<AddResponse> | Observable<AddResponse> | AddResponse;
}

export function HotelCRUDServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["get", "add"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("HotelCRUDService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("HotelCRUDService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const HOTEL_CR_UD_SERVICE_NAME = "HotelCRUDService";
