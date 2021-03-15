import React, { useState, useEffect } from "react";
import { GetAllImages } from "../src/services/Apicalls";

import ImageCard from "./components/ImageCard";

const App = (props) => {
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    fetchMyAPI();
  }, []);

  const fetchMyAPI = async () => {
    let { data } = await GetAllImages();
    setAllImages(data.details);
  };

  return (
    <div className="bg-gray-300 font-sans">
      <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto p-2">
        {allImages.map((image, index) => (
          <ImageCard image={image} key={index} initFn={fetchMyAPI} />
        ))}
      </div>
    </div>
  );
};

export default App;
