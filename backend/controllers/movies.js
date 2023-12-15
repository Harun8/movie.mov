const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllMovies = async (req, res) => {
  const movies = await prisma.movie.findMany();

  //   await prisma.$disconnect;
  console.log(movies.length);
  return res.status(200).json(movies);
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
