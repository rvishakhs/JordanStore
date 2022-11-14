import Head from 'next/head'
import React from 'react'
import { TiTick } from "react-icons/ti";

function success() {
  return (
    <div className='bg-[#e7Ecee] min-h-screen'>
         <Head>
            <title>Thank You | JordanStore</title>
            <link rel="icon" href="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/800px-Jumpman_logo.svg.png" />
        </Head>

        <div className='mx-auto max-w-5xl py-16 '>
          <div className='px-5 my-8 flex items-center space-x-3'>
                  <h1 className='font-semibold text-2xl md:text-3xl font-sans'>
                       Thank you for Ordering 
                  </h1>
                  <TiTick className='h-8 w-8  text-green-500' />
              </div>
        </div>

    </div>
  )
}

export default success
