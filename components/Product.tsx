import Image from 'next/image'
import React from 'react'
import { urlFor } from '../sanity'
import { products } from '../typings'

type Props = {
    product : products
}

function Product({product}: Props) {

  return (
    <div className='flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#35383C] p-8 md:h-[500px] md:w-[400px] md:p-10'>
        <div className='relative h-64 w-full md:h-72'>
            <Image
                src={urlFor(product.image).url()}
                layout="fill"
                objectFit='contain'
                alt='Product Image'
            />
        </div>
        {product.title}
    </div>
  )
}

export default Product