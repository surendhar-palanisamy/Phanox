import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

 
  const initialState = {
    product : <any>[]
  }
  
  export const cartItemSlice = createSlice({
    name: 'cartItem',
    initialState,
    reducers: {
      addtocart: (state,action:PayloadAction<any>) => {
        state.product.push(action.payload)   
      
      },
      increase_qty:(state,action:PayloadAction<any>)=>{
        const {checkproductincart,item} = action.payload
        state.product.map((single_product:any)=>{
        if(checkproductincart.product._id === single_product.product._id){
        single_product.item = single_product.item + item
 }
})
      }, 
      decrease_qty:(state,action:PayloadAction<any>)=>{
        const {checkproductincart,item} = action.payload
        state.product.map((single_product:any)=>{
        if(checkproductincart.product._id === single_product.product._id){
        single_product.item = single_product.item - item
 }
})
      },

      empty_cart :(state)=>{
      
          while (state.product.length > 0) {
            state.product.pop();
          }
        
      },


      total_price:(state)=>{
 

      }
    
    },
  })

  export const { addtocart,increase_qty,decrease_qty,empty_cart } = cartItemSlice.actions

export default cartItemSlice.reducer