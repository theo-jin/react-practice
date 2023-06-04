import { createSlice } from "@reduxjs/toolkit"

const user = createSlice({
    name : 'user',
    initialState : {name:'kim', age:20},
    reducers:{
      changeName(state){
        state.name = 'park' 
  
      },
      changeAge(state){
        state.age +=1
      }
    }
  
  
  })
  export const {changeName,changeAge}= user.actions 
  export default user