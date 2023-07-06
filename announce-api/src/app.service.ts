import { Injectable } from '@nestjs/common';
import { Announce } from './stubs/announce/v1alpha/announce';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';
import { AppService as HotelAppService } from '../../hotel-api/src/app.service';

@Injectable()
export class AppService {
  constructor(
      private prisma: PrismaService,
      private readonly hotelAppService: HotelAppService
  ) {}

    async create(data: Prisma.AnnounceCreateInput): Promise<Announce> {
        const { hotelId } = data;
        const hotel = await this.hotelAppService.findById(hotelId);
        if (!hotel) {
            return this.prisma.announce.create({
                data: {
                    name: data.name,
                    hotelId: hotelId,
                    createdAt: data.createdAt,
                    updatedAt: data.updatedAt,
                },
            });
        }
        throw new Error(`L'hôtel avec l'ID ${hotelId} n'existe pas.`);
    }


    findAll(): Promise<Announce[]> {
    return this.prisma.announce.findMany();
  }

  findById(id: number): Promise<Announce> {
    return this.prisma.announce.findUnique({
      where: { id },
    });
  }

  async update(
      id: number,
      data: Prisma.AnnounceUpdateInput
  ): Promise<Announce> {
    return this.prisma.announce.update({
      where: { id },
      data,
    });
  }

  delete(id: number): Promise<Announce> {
    return this.prisma.announce.delete({
      where: { id },
    });
  }
}
