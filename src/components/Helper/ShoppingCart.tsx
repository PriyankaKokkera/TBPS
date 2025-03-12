// "use Client"
// // import { Client } from '@clerk/nextjs/server';
// import { RootState } from '../../../store/store';
// import { Pointer, ShoppingBagIcon } from 'lucide-react'
// import React from 'react'
// import { useSelector } from 'react-redux';

// const ShoppingCart = () => {
//     const items=useSelector((state: RootState)=>state.cart.items);
//       const totalQuantity = items.reduce((total: any,item: { quantity: any; })=>total+item.quantity,0)
//   return (
//     <div className='relative'>
//         <span className='absolute -top-3 -right-2 w-6 h-6 bg-red-500 text-center flex items-center justify-center flec-col text-xs text-white rounded-full '>{totalQuantity}</span>
//         <ShoppingBagIcon cursor={"Pointer"} size={26}/>
      
//     </div>
//   )
// }

// export default ShoppingCart

// "use client"; 
// import { RootState } from "../../../store/store";
// import {ShoppingBagIcon } from "lucide-react";
// import React from "react";
// import { useSelector } from "react-redux";
// import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

// import CartSideBar from "./CartSideBar";

// const ShoppingCart = () => {
//   const items = useSelector((state: RootState) => state.cart.items);
//   const totalQuantity = items.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );

//   return (
//     <Sheet>
//         <SheetTrigger>
//     <div className="relative">
//       <span className="absolute -top-3 -right-2 w-6 h-6 bg-red-500 text-center flex items-center justify-center text-xs text-white rounded-full">
//         {totalQuantity}
//       </span>
//       <ShoppingBagIcon cursor="pointer" size={26} />
//     </div>
//     </SheetTrigger>
//     <SheetContent>
//     <CartSideBar items={items}/>
//     </SheetContent>
//     </Sheet>
//   );
// };

// export default ShoppingCart;

"use client"; // Ensures this component runs on the client side

import { RootState } from "../../../store/store";
import { ShoppingBagIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
// import { DialogTitle } from "../ui/dialog"; // ✅ Import DialogTitle
import CartSideBar from "./CartSideBar";

const ShoppingCart = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    setTotalQuantity(items.reduce((total, item) => total + item.quantity, 0));
  }, [items]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative cursor-pointer">
          <span className="absolute -top-3 -right-2 w-6 h-6 bg-red-500 text-center flex items-center justify-center text-xs text-white rounded-full">
            {totalQuantity}
          </span>
          <ShoppingBagIcon size={26} />
        </div>
      </SheetTrigger>

      <SheetContent>
        
        <CartSideBar items={items} />
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;
