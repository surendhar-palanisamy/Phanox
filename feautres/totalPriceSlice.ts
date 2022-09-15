import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

 
  const initialState = {
    total_price :0
  }


  export const totalpriceSlice = createSlice({
    name: 'cart_total_price', 
    initialState,
    reducers: {
      cartvalue: (state,action:PayloadAction<any>) => {
        state.total_price = action.payload
      },
    
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { cartvalue } = totalpriceSlice.actions
  
  export default totalpriceSlice.reducer