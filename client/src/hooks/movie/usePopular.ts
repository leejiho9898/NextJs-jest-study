import { getPopular } from "libs/api/movie";
import { useEffect, useState } from "react";

const usePopular = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getPopular();
      setMovies(data.results);
      console.log(data);
    };

    getData();
  }, []);
  return { movies, setMovies };
};

export default usePopular;
