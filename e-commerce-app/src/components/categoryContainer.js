import React from "react";
import { useParams } from "react-router-dom";
import ItemPreview from "./itemPreview"

function CategoryContainer(props) {
  let { categoryId } = useParams()
  let { db } = props

  return <>
    <ItemPreview db={db}
      data={db.find(entry => entry.categoryId === categoryId)}
    />
  </>
}

export default CategoryContainer