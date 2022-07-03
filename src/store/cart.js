import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: (
      localStorage.getItem('cartItems')
      ?JSON.parse(localStorage.getItem('cartItems'))
      :[]
    )
  },
  reducers: {
    update: (state, action) => {
      const index = state.items.findIndex(function (item){
        return (item.pid === action.payload.pid);
      });
      if(action.payload.count === 0) {
        state.items = state.items.filter((item)=>{
          return item.pid !== action.payload.pid;
        })

        localStorage.setItem('cartItems',JSON.stringify(state.items));
        return;
      }
      if(index >= 0) {
        state.items[index].count = action.payload.count;
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem('cartItems',JSON.stringify(state.items));
    },
    remove: (state, action) => {
        state.items = state.items.filter((item)=>{
            return item.pid !== action.payload.pid;
        })
        localStorage.setItem('cartItems',JSON.stringify(state.items));
    },
  }
})

export const { update, remove } = cartSlice.actions

export default cartSlice.reducer