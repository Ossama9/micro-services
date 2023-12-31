// @generated by protobuf-ts 2.9.0
// @generated from protobuf file "announce/v1alpha/announce.proto" (package "announce.v1alpha", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { AnnounceCRUDService } from "./announce";
import type { DeleteResponse } from "./announce";
import type { DeleteRequest } from "./announce";
import type { UpdateResponse } from "./announce";
import type { UpdateRequest } from "./announce";
import type { AddResponse } from "./announce";
import type { AddRequest } from "./announce";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { GetResponse } from "./announce";
import type { GetRequest } from "./announce";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service announce.v1alpha.AnnounceCRUDService
 */
export interface IAnnounceCRUDServiceClient {
    /**
     * @generated from protobuf rpc: Get(announce.v1alpha.GetRequest) returns (announce.v1alpha.GetResponse);
     */
    get(input: GetRequest, options?: RpcOptions): UnaryCall<GetRequest, GetResponse>;
    /**
     * @generated from protobuf rpc: Add(announce.v1alpha.AddRequest) returns (announce.v1alpha.AddResponse);
     */
    add(input: AddRequest, options?: RpcOptions): UnaryCall<AddRequest, AddResponse>;
    /**
     * @generated from protobuf rpc: Update(announce.v1alpha.UpdateRequest) returns (announce.v1alpha.UpdateResponse);
     */
    update(input: UpdateRequest, options?: RpcOptions): UnaryCall<UpdateRequest, UpdateResponse>;
    /**
     * @generated from protobuf rpc: Delete(announce.v1alpha.DeleteRequest) returns (announce.v1alpha.DeleteResponse);
     */
    delete(input: DeleteRequest, options?: RpcOptions): UnaryCall<DeleteRequest, DeleteResponse>;
}
/**
 * @generated from protobuf service announce.v1alpha.AnnounceCRUDService
 */
export class AnnounceCRUDServiceClient implements IAnnounceCRUDServiceClient, ServiceInfo {
    typeName = AnnounceCRUDService.typeName;
    methods = AnnounceCRUDService.methods;
    options = AnnounceCRUDService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: Get(announce.v1alpha.GetRequest) returns (announce.v1alpha.GetResponse);
     */
    get(input: GetRequest, options?: RpcOptions): UnaryCall<GetRequest, GetResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetRequest, GetResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Add(announce.v1alpha.AddRequest) returns (announce.v1alpha.AddResponse);
     */
    add(input: AddRequest, options?: RpcOptions): UnaryCall<AddRequest, AddResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<AddRequest, AddResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Update(announce.v1alpha.UpdateRequest) returns (announce.v1alpha.UpdateResponse);
     */
    update(input: UpdateRequest, options?: RpcOptions): UnaryCall<UpdateRequest, UpdateResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<UpdateRequest, UpdateResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Delete(announce.v1alpha.DeleteRequest) returns (announce.v1alpha.DeleteResponse);
     */
    delete(input: DeleteRequest, options?: RpcOptions): UnaryCall<DeleteRequest, DeleteResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeleteRequest, DeleteResponse>("unary", this._transport, method, opt, input);
    }
}
