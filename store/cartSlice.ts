
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export interface cartItem {
//   id: number;
//   title: string;
//   price: number;
//   category: string;
//   image: string;
//   rating: {
//     rate: number;
//     count: number;
//   };
//   quantity: number;
// }
// interface cartState {
//   items: cartItem[];
// }


// const initialState: cartState = {
//   items: typeof window !== "undefined"
//     ? JSON.parse(localStorage.getItem("cartItems") as string) || []
//     : [],
// };


// export const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addItem: (state, action: PayloadAction<Omit<cartItem, "quantity">>) => {
//       const existingItem = state.items.find(
//         (item) => item.id === action.payload.id
//       );
//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.items.push({ ...action.payload, quantity: 1 });
//       }
//       localStorage.setItem("cartItems", JSON.stringify(state.items));
//     },
//     removeItem: (state, action: PayloadAction<{ id: number }>) => {
//       const existingItem = state.items.find(
//         (item) => item.id === action.payload.id
//       );
//       if (existingItem) {
//         if (existingItem.quantity > 1) {
//           existingItem.quantity -= 1;
//         } else {
//           state.items = state.items.filter(
//             (item) => item.id != action.payload.id
//           );
//         }
//       }
//       localStorage.setItem("cartItems", JSON.stringify(state.items));
//     },
//     clearCart: (state) => {
//       state.items = [];
//       localStorage.setItem("cartItems", JSON.stringify(state.items));
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const { addItem, removeItem, clearCart } = cartSlice.actions;

// export default cartSlice.reducer;
import {createSlice,PayloadAction} from "@reduxjs/toolkit"

export interface cartItem {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity: number;
}

interface cartState {
  items: cartItem[];
}

const initialState: cartState = {
  items: typeof window !== "undefined" && localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems") as string)
    : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<cartItem, "quantity">>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
  },
});

// Action creators
export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
