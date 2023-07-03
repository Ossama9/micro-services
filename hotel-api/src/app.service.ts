import { Injectable } from '@nestjs/common';
import { Hotel } from './stubs/hotel/v1alpha/hotel';
import { Prisma } from '@prisma/client';
import {PrismaService} from "./primsa.service";

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  create(data: Prisma.HotelCreateInput): Promise<Hotel> {
    return this.prisma.hotel.create({ data });
  }

  findAll(): Promise<Hotel[]> {
    return this.prisma.hotel.findMany();
  }

  findById(id: number): Promise<Hotel> {
    return this.prisma.hotel.findUnique({
      where: { id },
    });
  }
  //
  // findByName(name: string): Promise<Hotel> {
  //   return this.prisma.hotel.findUnique({
  //     where: { name },
  //   });
  // }

  async update(id: number, data: Prisma.HotelUpdateInput): Promise<Hotel> {
    return this.prisma.hotel.update({
      where: { id },
      data,
    });
  }

  delete(id: number): Promise<Hotel> {
    return this.prisma.hotel.delete({
      where: { id },
    });
  }
}