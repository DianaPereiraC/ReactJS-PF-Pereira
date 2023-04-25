import React from "react";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore"
import ItemPreview from "./itemPreview"

function ItemListContainer(props) {
  const [fbProductsList, setFbProductsList] = useState([])
  const [fbCategoryList, setFbCategoryList] = useState([])
  
  useEffect(() => {
    const firestoreDB = getFirestore();

    const itemsCollection = collection(firestoreDB, 'items');
    getDocs(itemsCollection).then((snapshot) => {
      let queryResult = snapshot.docs.map((document) => (
        {
          ...document.data()
        }
      ))
      
      let resultCategoryId = queryResult.map(element => element.categoryId)
      resultCategoryId = new Set(resultCategoryId)
      resultCategoryId = [...resultCategoryId]
      
      let resultCategoryName = queryResult.map(element => element.categoryName)
      resultCategoryName = new Set(resultCategoryName)
      resultCategoryName = [...resultCategoryName]
      
      let result = [resultCategoryId, resultCategoryName].reduce((id, name) => id.map((idValue, idIndex) => {return {categoryId: idValue, categoryName: name[idIndex]}}))
      
      setFbCategoryList(result)
      setFbProductsList(queryResult)
    })
  }, [setFbCategoryList, setFbProductsList])

  function createCategories() {
    let categoriesPreview = []
    fbCategoryList.forEach(categoryElement => {
      let categoryId = categoryElement.categoryId
      let categoryName = categoryElement.categoryName
      
      let productList = fbProductsList.filter(product => product.categoryId === categoryId)
      let productData = {
        categoryId: categoryId,
        categoryName: categoryName,
        products: productList
      }      
      
      categoriesPreview.push(<ItemPreview data={productData} categoryId={categoryId} />)
    })
    return categoriesPreview
  }

  return <>
    <h1 className="my-2 display-1">Welcome to P&P</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit eget elit vel malesuada. Aenean tincidunt, ex id ullamcorper porttitor, nisl ex sagittis purus, eget sagittis ante enim in orci. Vivamus ac tincidunt ligula. Sed vitae ante non mauris dignissim dictum ac in est. Nunc pretium efficitur maximus. Maecenas eget vulputate enim. Sed auctor mauris urna. Aliquam eget nisi mi. Pellentesque ut varius lacus, id congue nisl.
    </p>
    { createCategories() }
  </>;
}

export default ItemListContainer