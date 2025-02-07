'use client';
import React from 'react'

import { ProductData } from "../../type";
import { twMerge } from 'tailwind-merge';
import { useDispatch } from 'react-redux';
 
import toast from 'react-hot-toast';
import { addToCart } from '@/redux/shoppersSlice';

interface props {
    item:ProductData ;
    className?: string;
 }

const AddToCartButton = ({ item, className }: props) => {
   const dispatch = useDispatch();
   const handleAddToCart=()=>{
      dispatch(addToCart(item));
      toast.success(`${item?.title.substring(0,12)}added successfully`);
   }

  return (
    <button
    onClick={handleAddToCart}
     className={twMerge("bg-accent bg-textWhite  w-full py-2 border border-px border-accent hover:bg-darkOrange hover:border-darkOrange hoverEffect font-semibold tracking-wide flex item-center justify-center gap-1",className)}>
        Add To Cart
     </button>
  )
}

export default AddToCartButton