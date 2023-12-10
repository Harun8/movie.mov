-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "rated" TEXT NOT NULL,
    "released" TEXT NOT NULL,
    "runtime" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "writer" TEXT NOT NULL,
    "actors" TEXT NOT NULL,
    "plot" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "awards" TEXT NOT NULL,
    "poster" TEXT NOT NULL,
    "metascore" INTEGER NOT NULL,
    "imdbRating" DOUBLE PRECISION NOT NULL,
    "imdbVotes" TEXT NOT NULL,
    "imdbID" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "response" BOOLEAN NOT NULL,
    "images" JSONB NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Movie_imdbID_key" ON "Movie"("imdbID");
