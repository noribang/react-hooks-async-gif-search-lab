import React, { useState } from "react";

function GifSearch( { handleSearchFormSubmit } ) {
    const [newSearch, setNewSearch] = useState("");

    /* UPDATES LOCAL STATE NEWSEARCH */
    function handleSearch(event) {
        /* UPDATES NEW SEARCH STATE */
        setNewSearch(event.target.value);
        console.log(event.target.value)
    }
    /* PUSHES NEW SEARCH UP TO PARENT PARENT COMPONENT */
    function handleSubmit(event) {
        // Prevent default page reload.
        event.preventDefault();
        /* PUSH LOCAL STATE NEWSEARCH DATA UP TO PARENT COMPONENT */
        handleSearchFormSubmit(newSearch);
        console.log("newSearch", newSearch)
    }

    return (
            <form
                className="searchForm"
                onSubmit={handleSubmit}
            >
                <label>Enter a Search Term:</label>
                <br></br>
                <input 
                type="text" 
                name="name"
                value={newSearch}
                onChange={handleSearch}
                />
                <br></br>
                <button type="submit">Find Gifs</button>
            </form>
        
    );
}

export default GifSearch;