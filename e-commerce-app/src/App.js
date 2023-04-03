import './App.css';
import Container from 'react-bootstrap/Container';
import MainNavbar from "./components/navbar"
import Home from "./components/home"
import AboutUs from "./components/aboutUs"
import CategoryContainer from "./components/categoryContainer"
import ItemContainer from "./components/itemContainer"
import CheckoutDetail from "./components/checkoutDetail"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

let dbMock = [
  {
    categoryId: "shirts",
    categoryName: "Shirts",
    products: [
      {
        id: "shirt_1",
        name: "Shirt 1",
        description: "Shirt description 1. Integer eleifend massa quis diam dignissim, ultrices feugiat nisl varius. Maecenas imperdiet dolor felis, sit amet scelerisque odio faucibus sit amet. Phasellus vulputate orci mauris, et efficitur leo condimentum ac.",
        price: 29.90
      },
      {
        id: "shirt_2",
        name: "Shirt 2",
        description: "Shirt description 2. Integer eleifend massa quis diam dignissim, ultrices feugiat nisl varius. Maecenas imperdiet dolor felis, sit amet scelerisque odio faucibus sit amet. Phasellus vulputate orci mauris, et efficitur leo condimentum ac.",
        price: 19.99
      },
      {
        id: "shirt_3",
        name: "Shirt 3",
        description: "Shirt description 3. Integer eleifend massa quis diam dignissim, ultrices feugiat nisl varius. Maecenas imperdiet dolor felis, sit amet scelerisque odio faucibus sit amet. Phasellus vulputate orci mauris, et efficitur leo condimentum ac.",
        price: 89.99
      },
    ]
  },
  {
    categoryId: "pants",
    categoryName: "Pants",
    products: [
      {
        id: "pants_1",
        name: "Pants 1",
        description: "Pants description 1. Integer eleifend massa quis diam dignissim, ultrices feugiat nisl varius. Maecenas imperdiet dolor felis, sit amet scelerisque odio faucibus sit amet. Phasellus vulputate orci mauris, et efficitur leo condimentum ac.",
        price: 29.99
      },
      {
        id: "pants_2",
        name: "Pants 2",
        description: "Pants description 1. Integer eleifend massa quis diam dignissim, ultrices feugiat nisl varius. Maecenas imperdiet dolor felis, sit amet scelerisque odio faucibus sit amet. Phasellus vulputate orci mauris, et efficitur leo condimentum ac.",
        price: 19.99
      },
      {
        id: "pants_3",
        name: "Pants 3",
        description: "Pants description 1. Integer eleifend massa quis diam dignissim, ultrices feugiat nisl varius. Maecenas imperdiet dolor felis, sit amet scelerisque odio faucibus sit amet. Phasellus vulputate orci mauris, et efficitur leo condimentum ac.",
        price: 89.99
      },
    ]
  },
  {
    categoryId: "accesories",
    categoryName: "Accesories",
    products: [
      {
        id: "accesories_1",
        name: "Accesories 1",
        description: "Accesories description 1. Integer eleifend massa quis diam dignissim, ultrices feugiat nisl varius. Maecenas imperdiet dolor felis, sit amet scelerisque odio faucibus sit amet. Phasellus vulputate orci mauris, et efficitur leo condimentum ac.",
        price: 29.99
      },
      {
        id: "accesories_2",
        name: "Accesories 2",
        description: "Accesories description 1. Integer eleifend massa quis diam dignissim, ultrices feugiat nisl varius. Maecenas imperdiet dolor felis, sit amet scelerisque odio faucibus sit amet. Phasellus vulputate orci mauris, et efficitur leo condimentum ac.",
        price: 19.99
      },
      {
        id: "accesories_3",
        name: "Accesories 3",
        description: "Accesories description 1. Integer eleifend massa quis diam dignissim, ultrices feugiat nisl varius. Maecenas imperdiet dolor felis, sit amet scelerisque odio faucibus sit amet. Phasellus vulputate orci mauris, et efficitur leo condimentum ac.",
        price: 89.99
      },
    ]
  }
]

function App() {
  return <>
    <div className="App">
      <BrowserRouter>
        <MainNavbar productList={dbMock.map(({ categoryId, categoryName }) => ({ categoryId, categoryName }))} />

        <Container className="p-2">
          <Routes>
            <Route exact path='/' element={<Home db={ dbMock } />} />
            <Route exact path='/about-us' element={<AboutUs />} />
            <Route exact path='/category/:categoryId' element={<CategoryContainer db={ dbMock } />} />
            <Route exact path='/category/:categoryId/:productId' element={<ItemContainer db={ dbMock } />} />
            <Route exact path='/checkout' element={<CheckoutDetail db={ dbMock } />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  </>;
}

export default App;
