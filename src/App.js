import './App.css';
import {Navbar,Container,Nav} from 'react-bootstrap';
import pic from './img/bg.png'
import data from './data';
import { createContext, useState } from 'react';
import { Routes,Route,Link,useNavigate,Outlet } from 'react-router-dom';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import axios from 'axios';

export const Context1 = createContext()

function App() {
  
  const [shoes,setShoes] = useState(data)
  const [stock,setStock]=useState([10,11,12])
  const navigate=useNavigate();
 
  function sortName(){
    const shoesTemp=[...shoes];
    shoesTemp.title.sort();
    setShoes(shoesTemp)
  }
  return (
    <div className="App">
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Detail</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
   
      <div className="container">
        {/* <button onClick={sortName}>정렬</button> */}
      <Routes>
        <Route path="/" element={  <div className="row">
        <div className="main-bg" style={{ backgroundImage : 'url('+pic+')' }}></div>
      {shoes.map(function(a,i){
         return (
      <Card shoes={shoes[i]} id={i}/>
         )})}  <button onClick={()=>{
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((data)=>{
            const copyShoes=[...shoes,...data.data];
            setShoes(copyShoes)
        })
          .catch(()=>{console.log('실패함 ㅅㄱ')})
        }}>button</button>
     </div>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/detail/:id" element={
             <Context1.Provider value={{stock,shoes}}>
        <Detail shoes={shoes} />
        </Context1.Provider>
      }/>
   
        <Route path="/event" element={<Event/>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path="two" element={<div>생일기념 쿠폰받기      </div>}/>
        </Route>
        <Route path ="*" element={<div>없는 페이지용</div>}/>
      </Routes>
      </div>
    </div>
  );
  function Card(props){
  
    return(
    <div className="col-md-4">
    <img src={`https://codingapple1.github.io/shop/shoes${props.id+1}.jpg`} width="80%" />
    <h4>{props.shoes.title}</h4>
    <p>{props.shoes.content}</p>
    </div>
  )}
  function Event(){
    return (
      <div>
        <h4>오늘의 이벤트</h4>
        <Outlet></Outlet>
      </div>
    )
  }
}

export default App;
