import './App.css';
import Container from 'react-bootstrap/Container';
import MainNavbar from "./components/navbar"
import Home from "./components/home"
import AboutUs from "./components/aboutUs"
import CategoryContainer from "./components/categoryContainer"
import ItemContainer from "./components/itemContainer"
import CheckoutDetail from "./components/checkoutDetail"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore"

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
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
    })
  }, [setFbCategoryList])
  
  return <>
    <div className="App">
      <BrowserRouter>
        <MainNavbar productList={fbCategoryList} />

        <Container className="p-2">
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/about-us' element={<AboutUs />} />
            <Route exact path='/category/:categoryId' element={<CategoryContainer/>} />
            <Route exact path='/category/:categoryId/:productId' element={<ItemContainer/>} />
            <Route exact path='/checkout' element={<CheckoutDetail/>} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  </>;
}

export default App;
