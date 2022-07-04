import React from "react";
import { v4 as uuid } from "uuid";


function GiftList({ src, key }) {

    return (
        <li key={key}><img src={src} alt="Giphy image"/></li>
    );
}

export default GiftList;