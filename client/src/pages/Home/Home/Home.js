import React, { useEffect, useState } from "react";
import Movies from "../Movies/Movies";

const Home = () => {
  const [videos, setVideos] = useState([]);

  return (
    <div>
      <Movies></Movies>
    </div>
  );
};

export default Home;
