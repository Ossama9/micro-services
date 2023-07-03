import { Injectable } from '@nestjs/common';
import { Announce } from './stubs/announce/v1alpha/announce';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  create(data: Prisma.AnnounceCreateInput): Promise<Announce> {
    return this.prisma.announce.create({ data });
  }

  findAll(): Promise<Announce[]> {
    return this.prisma.announce.findMany();
  }

  findById(id: number): Promise<Announce> {
    return this.prisma.announce.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.AnnounceUpdateInput): Promise<Announce> {
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