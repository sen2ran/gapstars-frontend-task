import React, { useState, useEffect } from "react";
import { GetAllImages, GetSelectedImages } from "../src/services/Apicalls";

import ImageCard from "./components/ImageCard";

const App = (props) => {
  const [allImages, setAllImages] = useState([]);
  const [isSlected, setIsSelected] = useState(true)

  useEffect(() => {
    initFn();
  }, []);

  useEffect(() => {
    initFn();
  }, [isSlected]);

  const initFn = async () => {
    let { data } = isSlected ? await GetSelectedImages() : await GetAllImages();
    setAllImages(data.details);
  };

  return (
    <div className="bg-gray-300 font-sans">
      <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>

        <button
          class="bg-white rounded h-full text-grey-darkest no-underline shadow-md p-3 m-2"
          onClick={() => { setIsSelected(true) }}
        >Home</button>
        <button
          class="bg-white rounded h-full text-grey-darkest no-underline shadow-md p-3"
          onClick={() => { setIsSelected(false) }}
        >Eidt</button>
      </div>
      <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto p-2">
        {allImages.length > 0 && allImages.map((image, index) => (
          <ImageCard image={image} key={index} initFn={initFn} isSlected={isSlected} />
        ))}
        {allImages.length == 0 && <h1>No Images</h1>}
      </div>
    </div>
  );
};

export default App;
