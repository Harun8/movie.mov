import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import "./styles/defualt.css";
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
// import "whatwg-fetch";
// import fetch from "node-fetch";
import { createApi } from "unsplash-js";

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [poster, setPoster] = useState([]);

  useEffect(() => {
    const getAllMovies = async () => {
      const response = await axios.get("http://localhost:5000/api/v1");
      console.log(response.data);
      setMovies(response.data);
    };

    getAllMovies();
  }, []);

  const getClickedMovie = async (id) => {
    console.log("the id is: ", id);
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/${id}`);
      console.log(`Data from id: ${id} `, response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <body className="bg_color">
      <Nav></Nav>
      <div className="my-5">
        <Header></Header>
      </div>
      <div class="container text-center">
        <div class="row ">
          {movies &&
            movies.length > 0 &&
            movies.map((movie) => (
              <div className="col-3 ">
                <Card
                  onClick={() => getClickedMovie(movie.id)}
                  id={movie.id}
                  key={movie.id}
                  title={movie.Title}
                  desc={movie.Plot}
                  img={movie.Poster}></Card>
              </div>
            ))}
        </div>
      </div>
    </body>
  );
};

export default Homepage;
