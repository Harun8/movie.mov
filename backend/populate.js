const { PrismaClient } = require("@prisma/client");
const movieJson = require("./files/Film.json");
const movie = require("./files/Film.json");
const prisma = new PrismaClient();

const populateDB = async () => {
  console.log(movieJson);
  const createMovies = await prisma.movie.createMany({ data: movieJson });
  console.log(createMovies);
};

populateDB()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
