/*
  Warnings:

  - You are about to drop the column `content` on the `Script` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[location]` on the table `Script` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `location` to the `Script` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Script" DROP COLUMN "content",
ADD COLUMN     "location" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Script_location_key" ON "Script"("location");
