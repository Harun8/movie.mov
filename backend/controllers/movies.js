const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllMovies = async (req, res) => {
  const movies = await prisma.movie.findMany();

  //   await prisma.$disconnect;
  console.log(movies.length);
  res.status(200).json(movies);
};

module.exports = { getAllMovies };
