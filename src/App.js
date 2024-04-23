import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import interiorImg from './interior.png';
import FurnitureData from './routes/furnitureItems.js';
// import products from './data.js';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate,Outlet } from 'react-router-dom';
// import Detail from './routes/detail.js';
import MainPg from './routes/main.js';
import data from './data.js';
import FurnitureItems from './routes/furnitureItems.js';
import Item from './routes/item.js';




function App() {

const [items, setItems] = useState(data);
let navigate = useNavigate();

  return (
    <div className="App">
    
   
   
    <>
      <Navbar className='Nav'>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate(-1)}} >Home</Nav.Link>
            <Nav.Link  onClick={()=>{navigate("/products")}}>Products</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link  onClick={()=>{navigate("/about")}}>About</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/event")}}>Event</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </>

 
      <Routes>
        <Route path="/home" element={<div><MainPg /> <FurnitureData items={items}/></div>} />
        <Route path="/products" element={<FurnitureItems items={items}/>} />
        <Route path="/products/:id" element={<Item items={items}/>}/>
        <Route path="*" element={<div>404page</div>}/>

        <Route path="/about" element={<About/>}>
          <Route path="members" element={<Members/>}/>
          <Route path="location" element={<Location/>}/>
        </Route>

        <Route path="event" element={<Event/>}>
          <Route path="one" element={<div>Order Today, get 1+1</div>}/>
          <Route path="two" element={<div>Birthday Coupon</div>}/>
        </Route>


      </Routes>

 
  </div>
  );
}
function Event () {
  return (
    <div>
      <h4>Today's Event</h4>
      <Outlet/>
    </div>
  )
}
function About () {
  return (
  <div>
    <h4>Company founded in 2024</h4>
    <Outlet></Outlet>
  </div>
  )
}

function Members () {
  return (
  <div>
    <h4>Rachel Kim & John Park</h4>
  </div>
  )
}

function Location () {
  return (
  <div>
    <h4>Santa Clara</h4>
  </div>
  )
}
export default App;
