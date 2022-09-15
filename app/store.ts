import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../feautres/cartSlice'
import cartItemReducer from '../feautres/cartItemSlice'
import totalpriceReducer from '../feautres/totalPriceSlice'

export const store = configureStore({
  reducer: {
    showcart:cartReducer,
    addtocart :cartItemReducer,
    cart_total_price:totalpriceReducer

  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch