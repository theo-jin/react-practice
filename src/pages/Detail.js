
import { useContext, useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { cleanup } from "@testing-library/react";
import {Context1} from './../App'

export default function Detail (props) {
  const {stock} = useContext(Context1)

  const [input, setInput]=useState('');
  const [count,setCount]=useState(0);
  const [alert,setAlert]=useState(true);
  const [alert1,setAlert1]=useState(null);
  const [fade2,setFade2]=useState('')
  const [tab,setTab]=useState(0)
  const {id}=useParams();
  console.log({stock} )
  useEffect(()=>{
    const a =setTimeout(()=>{setAlert(false)},2000);
    setTimeout(()=>{setFade2('end')},100)
    console.log(1)
    return ()=>{
      clearTimeout(a)
      console.log(2)
    }
  },[])

  useEffect(()=>{
    isNaN(input) == true ? setAlert1("그러지마세요"):  setAlert1(null)
  console.log(  typeof(input))
  },[input])

  function FillExample() {
    function TabContent({tab}){   
      
      const [fade,setFade]=useState('')
      setTimeout(()=>{setFade('end')},100)
      // useEffect(()=>{
      //   setFade('end')
        
      // },[tab])    
      return (<div className={`start ${fade}`}>
{
     [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>] [tab]
}</div>
      )
      //   if(tab==0){
    //   return <div>내용0</div>
    // }else if(tab==1){
    //   return<div>내용1</div>
    // }else if(tab==2){
    //   return <div>내용2</div>
    // }
  }
    return (
      <div>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home" onClick={()=>{setTab(0)}}>Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{setTab(1)}} >Loooonger NavLink</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={()=>{setTab(2)}}>Link</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab}/>
      </div>
    );
  }



  return(
<div className={`container start ${fade2}`}>
  {/* <div>
  {count}
  {alert == true ?   <button onClick={()=>{setCount(count+1)}}>버튼</button>: null }
  </div>
   */}
  <div className="row">
    {/* <input onChange={(e)=>{setInput(e.target.value)}}/>{alert1} */}
    <div className="col-md-6">
      <img src={`https://codingapple1.github.io/shop/shoes${Number(id) + 1}.jpg`} width="100%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">{props.shoes[id].title}</h4>
      <p>{props.shoes[id].content}</p>
      <p>{props.shoes[id].price}</p>
      <button className="btn btn-danger">주문하기</button> 

    </div>     
    <FillExample/>
  </div>    
</div> 
  );
}