/*
  Warnings:

  - You are about to drop the `_ContentToPost` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `hashtag` to the `Content` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ContentToPost" DROP CONSTRAINT "_ContentToPost_A_fkey";

-- DropForeignKey
ALTER TABLE "_ContentToPost" DROP CONSTRAINT "_ContentToPost_B_fkey";

-- AlterTable
ALTER TABLE "Content" ADD COLUMN     "hashtag" TEXT NOT NULL;

-- DropTable
DROP TABLE "_ContentToPost";
