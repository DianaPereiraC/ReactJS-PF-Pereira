import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"
import ItemPreview from "./itemPreview"

function CategoryContainer(props) {
  let { categoryId } = useParams()
  const [fbCategoryName, setFbCategoryName] = useState("")
  const [fbProductList, setFbProductList] = useState([])
  
  useEffect(() => {
    const firestoreDB = getFirestore();

    const itemsCollection = query(collection(firestoreDB, 'items'), where('categoryId', '==', categoryId))
    getDocs(itemsCollection).then((snapshot) => {
      let queryResult = snapshot.docs.map((document) => (
        {
          ...document.data()
        }
      ))
      
      let categoryName = queryResult[0].categoryName
      setFbProductList(queryResult)
      setFbCategoryName(categoryName)
    })
  }, [setFbProductList, categoryId])

  let productData = {
    categoryId: categoryId,
    categoryName: fbCategoryName,
    products: fbProductList
  }      
  
  return <>
    <ItemPreview data={productData} categoryId={categoryId} />
  </>
}

export default CategoryContainer