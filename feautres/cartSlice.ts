import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  value: boolean
}

const initialState: CartState = {
  value: false,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    togglecart: (state) => {
      state.value = !state.value
    },
  
  },
})

// Action creators are generated for each case reducer function
export const { togglecart } = cartSlice.actions

export default cartSlice.reducer