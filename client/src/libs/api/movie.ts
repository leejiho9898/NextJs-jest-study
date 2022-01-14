import axios from "axios";

const API_KEY = "5abee3cc86cd042648c65f9088106a23";

export const getPopular = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  );

  return response.data;
};
