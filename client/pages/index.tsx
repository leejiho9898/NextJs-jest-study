import React, { useEffect, useState } from "react";
import Seo from "components/Seo";

const API_KEY = "5abee3cc86cd042648c65f9088106a23";

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      console.log(data);
    })();
  }, []);
  return (
    <>
      <Seo title="Home" />
    </>
  );
};

export default Home;
