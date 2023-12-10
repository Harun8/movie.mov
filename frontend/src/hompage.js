import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import "./styles/defualt.css";
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";

const Homepage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getAllMovies = async () => {
      const response = await axios.get("http://localhost:5000");
      console.log(response.data);
      setMovies(response.data.data);
    };

    getAllMovies();
  }, []);

  return (
    <body className="bg_color">
      <Nav></Nav>
      <div className="my-5">
        <Header></Header>
      </div>
      {movies &&
        movies.length > 0 &&
        movies.map((movie) => (
          <Card
            key={movie.id}
            title={movie.Title}
            desc={movie.Plot}
            img={movie.Images[1]}></Card>
        ))}
    </body>
  );
};

export default Homepage;
