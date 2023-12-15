require("express-async-errors");
const express = require("express");
const app = express();
const movieRouter = require("./routes/movies");
const authRouter = require("./routes/AuthRoutes");
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", movieRouter);
app.use("/api/v1", authRouter);

app.get("/:id", movieRouter);
// app.post("/api/v1", authRouter);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, console.log(`Server is listening on ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
