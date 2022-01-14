import Seo from "components/Seo";
import usePopular from "hooks/movie/usePopular";
import React from "react";



const Home = () => {
  usePopular();
  return (
    <>
      <Seo title="Home" />
    </>
  );
};

export default Home;
