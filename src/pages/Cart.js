import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { changeAge } from '../store/userSlice';
import { increaseCart } from '../store';

export default function Cart(){
    
  const cartData = useSelector((state)=>{ return state})
  const dispatch=useDispatch()
    return (
      <div>
      <h1> Name:{cartData.user.name} Age:{cartData.user.age}</h1> 
      <button onClick={()=>{dispatch(changeAge())}}>+</button>
        <Table striped bordered hover variant="dark">
       
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Count</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
        
            {cartData.cart.map(function(a,i){
              console.log(cartData.cart[i].name)
              return(
                <tr key={i}>
                <td>{cartData.cart[i].id}</td>
                <td>{cartData.cart[i].name}</td>
                <td>{cartData.cart[i].count}</td>
                <td>
                  <button onClick={()=>{dispatch(increaseCart())}}>+</button>
                </td>
              </tr>
              )
            })}
        
          </tbody>
        </Table>
        </div>
      );
}