const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllMovies = async (req, res) => {
  let result = prisma.movie.findMany();

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 12;
  const skip = (page - 1) * limit;

  result = prisma.movie.findMany({
    skip: skip,
    take: limit,
  });

  const movies = await result;
  // const movies = await prisma.movie.findMany();
  console.log("movies", movies);
  //   await prisma.$disconnect;
  console.log(movies.length);
  return res.status(200).json({
    data: movies,
    page,
    perPage: limit,
  });
};

const getMovie = async (req, res) => {
  console.log("GetMovie function called with ID:", req.params.id);
  try {
    const movies = await prisma.movie.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!movies) {
      return res.status(404).json({ msg: "no movie with that id" });
    }
    res.status(201).json({ movies });
  } catch (error) {
    return res.status(500).json({ msg: "EROOW" });
  }
};

module.exports = { getAllMovies, getMovie };
