import React from "react";
import ItemListContainer from "./listContainer"

function Home(props) {
    let { db } = props

    return <>
        <ItemListContainer db={db} />
    </>
}

export default Home