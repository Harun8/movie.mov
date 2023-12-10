/*
  Warnings:

  - You are about to drop the column `actors` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `awards` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `director` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `genre` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `images` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `language` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `metascore` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `plot` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `poster` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `rated` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `released` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `response` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `runtime` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `writer` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `Movie` table. All the data in the column will be lost.
  - Added the required column `Actors` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Awards` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Country` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Director` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Genre` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Images` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Language` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Metascore` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Plot` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Poster` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Rated` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Released` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Response` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Runtime` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Title` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Type` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Writer` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Year` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "actors",
DROP COLUMN "awards",
DROP COLUMN "country",
DROP COLUMN "director",
DROP COLUMN "genre",
DROP COLUMN "images",
DROP COLUMN "language",
DROP COLUMN "metascore",
DROP COLUMN "plot",
DROP COLUMN "poster",
DROP COLUMN "rated",
DROP COLUMN "released",
DROP COLUMN "response",
DROP COLUMN "runtime",
DROP COLUMN "title",
DROP COLUMN "type",
DROP COLUMN "writer",
DROP COLUMN "year",
ADD COLUMN     "Actors" TEXT NOT NULL,
ADD COLUMN     "Awards" TEXT NOT NULL,
ADD COLUMN     "Country" TEXT NOT NULL,
ADD COLUMN     "Director" TEXT NOT NULL,
ADD COLUMN     "Genre" TEXT NOT NULL,
ADD COLUMN     "Images" JSONB NOT NULL,
ADD COLUMN     "Language" TEXT NOT NULL,
ADD COLUMN     "Metascore" INTEGER NOT NULL,
ADD COLUMN     "Plot" TEXT NOT NULL,
ADD COLUMN     "Poster" TEXT NOT NULL,
ADD COLUMN     "Rated" TEXT NOT NULL,
ADD COLUMN     "Released" TEXT NOT NULL,
ADD COLUMN     "Response" BOOLEAN NOT NULL,
ADD COLUMN     "Runtime" TEXT NOT NULL,
ADD COLUMN     "Title" TEXT NOT NULL,
ADD COLUMN     "Type" TEXT NOT NULL,
ADD COLUMN     "Writer" TEXT NOT NULL,
ADD COLUMN     "Year" TEXT NOT NULL;
