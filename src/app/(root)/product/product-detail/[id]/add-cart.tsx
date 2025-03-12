"use client";
import { Product } from "../../../../../../typing";
import { Button } from "@/components/ui/button";

import React from "react";
import { addItem } from "../../../../../../store/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "sonner";



const AddToCart = ({ product }: {product:Product}) => {
    const dispatch = useDispatch();
 
  const addToCartHandler = () => {
    dispatch(addItem(product));
   
    toast.success(`${product.title} added to cart!`, {
      description: "Check your cart for details.",
      duration: 3000,
      style: {
          backgroundColor: "green", // Equivalent to Tailwind's bg-green-700
          color: "#ffffff", // White text for contrast
        }, // 3 seconds
    });
  };
  return (
    <Button
      onClick={() => {
        addToCartHandler();
      }}
      className="mt-6"
    >
      Add to Cart
    </Button>
  );
};

export default AddToCart;