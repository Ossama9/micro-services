/*
  Warnings:

  - Added the required column `hotelId` to the `Announce` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Announce` ADD COLUMN `hotelId` INTEGER NOT NULL;
