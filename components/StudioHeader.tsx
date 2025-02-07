import Link from 'next/link'
import React from 'react'
import { IoReturnDownBack } from "react-icons/io5";
import Logo from './Logo';

const StudioHeader = (props) => {
  return (
    <div>
        <div className='p-5 bg- accent text-gray-100 flex items-center justify-between'>
            <Link href={"/"} className='flex items-center gap-3 font-semibold hover:text-darkOrange hoverEffect'>
               <IoReturnDownBack className='text-2xl'/>Go To Website
            </Link>
            <Logo  className="text-white"/>
            <p className='hidden md:inline-flex text0sm '>Admin Studio for Comforty Online Store</p>
        </div>
        {props.renderDefault(props)}
    </div>
  )
}

export default StudioHeader