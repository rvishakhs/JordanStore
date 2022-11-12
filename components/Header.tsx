import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiSearch, CiShoppingBasket, CiUser  } from "react-icons/ci";
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../redux/basketSlice';

function Header() {

    const items = useSelector(selectBasketItems)

    const session = false;

  return (
    <header className=' sticky top-0 z-30 bg-[#e7Ecee] flex items-center w-full  mx-auto justify-between'>
        {/* Logo section */}
        <div className='flex items-center justify-center md:w-1/5'>
            <Link href='/'>
                <div className='relative h-20 w-10 cursor-pointer opacity-80 transition hover:opacity-100' >
                    <Image
                        src="https://1000logos.net/wp-content/uploads/2016/10/Colors-Air-Jordan-Logo.jpg"
                        layout='fill'
                        objectFit='contain'
                        alt='text'
                    />
                </div>
            </Link>
        </div>
        <div className='hidden md:flex space-x-10 items-center'>
            <p className='header link'>Product</p>
            <p className='header link'>Explore</p>
            <p className='header link'>Support</p>
            <p className='header link'>Business</p>
        </div>
        <div className='flex space-x-3 items-center justify-center w-1/5'>
            <CiSearch className='h-6 w-6 cursor-pointer transition hover:scale-110'/>
            <Link href='/cartdetails'>
                <div className='cursor-pointer relative'>
                    <span className=' text-xs font-medium animate-bounce absolute -right-1 -top-1 z-50 flex h-4 w-4 
                    items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500'>{items.length}</span>
                    <CiShoppingBasket className='h-6 w-6 cursor-pointer transition hover:scale-110'/>
                </div>
            </Link>
            {session? (<CiSearch className='h-6 w-6 cursor-pointer transition hover:scale-110'/>)
             : (<CiUser className='h-6 w-6 cursor-pointer transition hover:scale-110'/>)}
        </div>

    </header>
  )
}

export default Header