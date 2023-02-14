/*
  Warnings:

  - Added the required column `uriDeputado` to the `deputados` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "deputados" ADD COLUMN     "uriDeputado" TEXT NOT NULL;
