const axios = require("axios");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const PosterID = [
  "tt0455944",
  "tt0139654",
  "tt2911666",
  "tt1431045",
  "tt1670345",
  "tt1355644",
  "tt1637688",
  "tt0448157",
  "tt2179136",
  "tt2005151",
  "tt1637725",
  "tt1488606",
  "tt8629748",
  "tt1489889",
  "tt6339102",
  "tt1951266",
  "tt4500922",
  "tt7467820",
  "tt0365467",
  "tt4561226",
];

let movies = [];
const getPoster = async () => {
  let answer = [];
  for (let i = 0; i < PosterID.length; i++) {
    const response = await axios.get(
      `http://www.omdbapi.com/?i=${PosterID[i]}&apikey=fa853a53`
    );
    answer.push(response.data);
  }

  movies = answer.map((item) => {
    let { Ratings, ...rest } = item;
    return rest;
  });

  console.log(movies);
  //   const { Ratings, ...rest } = answer;
  //   console.log("moviess", rest);
  //   movies = rest;
  //   setPoster(answer);
};
// getPoster();
const populateMoviesTable = async () => {
  await getPoster();
  console.log("moves", movies);
  const createMovies = await prisma.movie.createMany({ data: movies });
  console.log(createMovies);
};

populateMoviesTable()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
