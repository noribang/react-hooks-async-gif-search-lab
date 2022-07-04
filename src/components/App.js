import React, { useState } from "react";
import NavBar from "./NavBar";
import GifListContainer from "./GifListContainer";

// the App component should render out the GifListContainer component

function App() {
  // const [giphyImgSearch, setGiphyImgSearch] = useState("trains");

  // /* UPDATES STATE FROM NEW SEARCH PASSED FROM CHILD GIFSEARCH */
  // function handleSearchFormSubmit(newSearch) {
  //   setGiphyImgSearch(newSearch);
  //   console.log("giphyImgSearch: ", giphyImgSearch);
  // }

  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer />
      {/* <GifListContainer search={giphyImgSearch}/> */}
      {/* <GifSearch handleSearchFormSubmit={handleSearchFormSubmit}/> */}

    </div>
  );
}

export default App;
