import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";
import { v4 as uuid } from "uuid";

function GifListContainer() {
    /* GIPHY IMGS ON PAGE LOAD. */
    const [giphyImgArr, setGiphyImgArr] = useState([]);
    const [giphyImgSearch, setGiphyImgSearch] = useState("trains");

    /* UPDATES STATE FROM NEW SEARCH PASSED FROM CHILD GIFSEARCH */
    function handleSearchFormSubmit(newSearch) {
        setGiphyImgSearch(newSearch);
        console.log("giphyImgSearch: ", giphyImgSearch);
    }

    function fetchGif() {
        {/* FETCH. API. */} 
        const APIKEY = "add real GIPHY key"

        fetch(`https://api.giphy.com/v1/gifs/search?q=${giphyImgSearch}&api_key=${APIKEY}&rating=g`)
            // .then((r) => console.log(r.json()))
            .then((r) => r.json())
            // .then((data) => console.log(data.data[0].images.original.url))
            .then((data) => {
                // data.data.map((obj) => {obj.images.original.url})
                console.log(data.data);
                /* ARRAY OF OBJECTS */
                const newArr = data.data.filter((obj, index) => index < 3);
                console.log(newArr);
                // setGiphyImgArr(data.data);
                setGiphyImgArr(newArr);
            })
            
            // console.log("giphyImgArr: ", giphyImgArr);
            // console.log("newArr: ", newArr);
    }

    /* Side effect with empty dependency array. */  
    // useEffect(() => {
    //     {/* FETCH. API. */}
    //     fetchGif();   
    // }, []);
        

    fetchGif();
        
        return (
            <div>
                <div className="gifList">
                    {/* GIFLIST CONTAINER */}
                    <ul>
                        {/* GIFLIST */}
                        {giphyImgArr.map((obj) => <GifList key={uuid()} src={obj.images.original.url}/>)}
                    </ul>
                </div>
                <GifSearch handleSearchFormSubmit={handleSearchFormSubmit}/>
            </div>
        )
}

export default GifListContainer;