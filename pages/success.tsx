import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { BsCheck2 } from "react-icons/bs";

function success() {

  const router = useRouter()

  const {sessionId } = router.query

  return (
    <div className='bg-[#e7Ecee] min-h-screen'>
         <Head>
            <title>Thank You | JordanStore</title>
            <link rel="icon" href="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/800px-Jumpman_logo.svg.png" />
        </Head>

        <header className='ml-4 p-1 '>
          <Link href='/'>
                  <div className='relative h-20 w-10 cursor-pointer opacity-80 transition hover:opacity-100 lg:hidden' >
                      <Image
                          src="https://1000logos.net/wp-content/uploads/2016/10/Colors-Air-Jordan-Logo.jpg"
                          layout='fill'
                          objectFit='contain'
                          alt='text'
                      />
                  </div>
            </Link>
        </header>

        <main className='grid '>
          <section className='order-2 mx-auto max-w-xl  mx-4 lg:col-span-5 lg:mx-0 lg:max-w-none lg:pr-16 lg:pt-16  xl:pl-16 2xl:pl-44'>       
            <Link href='/'>
                  <div className='relative h-24 ml-14 w-16 cursor-pointer transition hidden lg:inline-flex' >
                      <Image
                          src="https://1000logos.net/wp-content/uploads/2016/10/Colors-Air-Jordan-Logo.jpg"
                          layout='fill'
                          objectFit='contain'
                          alt='text'
                      />
                  </div>
            </Link>
          <div className='flex space-x-4 my-8 mx-4 lg:mx-14 '>
            <div className='flex h-11 w-11 items-center justify-center border-2 border-black rounded-full text-lg p-1'>
                <BsCheck2 className='h-8 w-8' />
            </div>
            <div>
              <p className='text-sm text-gray-500'>Order #{sessionId?.slice(-5)}</p>
              <h2 className='text-lg'>Thank You {" "} 
              {/* {session ? sessionId.user?.name?.split : "Guest" } */}
              </h2>
            </div>
          </div>
          <div className=' mx-4 divide-y divide-gray-400 rounded-lg border border-gray-400 p-2'>
            <div className='pt-4 pb-2'>
              <p className='text-lg'>Your Order is Confirmed</p>
              <p className='text-sm text-justify'>we've accepted your order, and we're getting it ready. Come back to this page for updates on your shipment status</p>
            </div>
            <div className='py-3 '>
              <p className='text-lg'>Order Number</p>
              <p className='text-sm'>#cb3565sdjg</p>
            </div>
          </div>
          <div className=' mx-4 mt-4 divide-y divide-gray-400 rounded-lg border border-gray-400 p-2'>
            <div className='pt-4 pb-2'>
              <p className='text-lg'>Order Updates</p>
              <p className='text-sm'>You'll get the shipment details and deliver updates by Email</p>
            </div>
            <div className='py-3 hidden lg:inline-flex'>
              <p className='text-sm'>Need help? Contact us on jordanstorehelpline@gmail.com</p>
            </div>
          </div>
          </section>

        </main>



    </div>
  )
}

export default success
