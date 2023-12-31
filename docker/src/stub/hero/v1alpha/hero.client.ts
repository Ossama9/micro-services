// @generated by protobuf-ts 2.8.3
// @generated from protobuf file "hero/v1alpha/hero.proto" (package "hero.v1alpha", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { HeroService } from "./hero";
import type { AttackHeroResponse } from "./hero";
import type { AttackHeroRequest } from "./hero";
import type { FetchHeroResponse } from "./hero";
import type { FetchHeroRequest } from "./hero";
import type { CreateHeroResponse } from "./hero";
import type { CreateHeroRequest } from "./hero";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { HelloReply } from "./hero";
import type { HelloRequest } from "./hero";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service hero.v1alpha.HeroService
 */
export interface IHeroServiceClient {
    /**
     * @generated from protobuf rpc: Hello(hero.v1alpha.HelloRequest) returns (hero.v1alpha.HelloReply);
     */
    hello(input: HelloRequest, options?: RpcOptions): UnaryCall<HelloRequest, HelloReply>;
    /**
     * @generated from protobuf rpc: CreateHero(hero.v1alpha.CreateHeroRequest) returns (hero.v1alpha.CreateHeroResponse);
     */
    createHero(input: CreateHeroRequest, options?: RpcOptions): UnaryCall<CreateHeroRequest, CreateHeroResponse>;
    /**
     * @generated from protobuf rpc: FetchHero(hero.v1alpha.FetchHeroRequest) returns (hero.v1alpha.FetchHeroResponse);
     */
    fetchHero(input: FetchHeroRequest, options?: RpcOptions): UnaryCall<FetchHeroRequest, FetchHeroResponse>;
    /**
     * @generated from protobuf rpc: AttackHero(hero.v1alpha.AttackHeroRequest) returns (hero.v1alpha.AttackHeroResponse);
     */
    attackHero(input: AttackHeroRequest, options?: RpcOptions): UnaryCall<AttackHeroRequest, AttackHeroResponse>;
}
/**
 * @generated from protobuf service hero.v1alpha.HeroService
 */
export class HeroServiceClient implements IHeroServiceClient, ServiceInfo {
    typeName = HeroService.typeName;
    methods = HeroService.methods;
    options = HeroService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: Hello(hero.v1alpha.HelloRequest) returns (hero.v1alpha.HelloReply);
     */
    hello(input: HelloRequest, options?: RpcOptions): UnaryCall<HelloRequest, HelloReply> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<HelloRequest, HelloReply>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: CreateHero(hero.v1alpha.CreateHeroRequest) returns (hero.v1alpha.CreateHeroResponse);
     */
    createHero(input: CreateHeroRequest, options?: RpcOptions): UnaryCall<CreateHeroRequest, CreateHeroResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<CreateHeroRequest, CreateHeroResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: FetchHero(hero.v1alpha.FetchHeroRequest) returns (hero.v1alpha.FetchHeroResponse);
     */
    fetchHero(input: FetchHeroRequest, options?: RpcOptions): UnaryCall<FetchHeroRequest, FetchHeroResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<FetchHeroRequest, FetchHeroResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: AttackHero(hero.v1alpha.AttackHeroRequest) returns (hero.v1alpha.AttackHeroResponse);
     */
    attackHero(input: AttackHeroRequest, options?: RpcOptions): UnaryCall<AttackHeroRequest, AttackHeroResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<AttackHeroRequest, AttackHeroResponse>("unary", this._transport, method, opt, input);
    }
}
