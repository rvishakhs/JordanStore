import Image from 'next/image'
import React from 'react'
import { urlFor } from '../sanity'
import { products } from '../typings'
import { BsCartPlus } from "react-icons/bs";

type Props = {
    product : products
}

function Product({product}: Props) {

  return (
    <div className='flex h-fit w-[280px] select-none flex-col space-y-2 rounded-xl bg-[#35383C] p-5 md:h-[400px] md:w-[300px] md:p-5'>
        <div className='relative h-64 w-full md:h-72'>
            <Image
                src={urlFor(product.image).url()}
                layout="fill"
                objectFit='contain'
                alt='Product Image'
            />
        </div>
        <div className='flex  items-center justify-between mx-auto ' >
          <div className=' flex flex-col px-2 space-y-2'>
            <h3 className='text-white text-lg'>{product.title}</h3>
            <h2 className='text-white'>$ {product.price}</h2>
          </div>
          <div className='flex items-center justify-center '>
              <button className='rounded-full h-12 w-12 border-none flex-shrink-0 bg-gradient-to-r from-pink-500 to-purple-500 flex items-center mx-auto pl-3 hover:scale-105 text-xl text-center' ><BsCartPlus /></button>
          </div>
        </div>
    </div>
  )
}

export default Product