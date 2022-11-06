import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Landing from '../components/Landing'
import { Tab } from '@headlessui/react'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Jordan Store</title>
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/800px-Jumpman_logo.svg.png" />
      </Head>
      <Header />
      {/* Main Section */}
      <main className='bg-[#e7Ecee] relative h-[200vh]'>
        <Landing />
      </main>
      <section className='relative z-40 -mt-[100vh] min-h-screen bg-[#1b1b1b]'>
        <div className='space-y-4 py-6'>
          <h1 className='text-center text-4xl font-medium tracking-wide text-white'>
            New Promos
          </h1>
          <Tab.Group>
            <Tab.List className="flex justify-center space-x-3">
              <Tab className="text-white p-1">Jordan low</Tab>
              <Tab>Jordan Mid</Tab>
              <Tab>Jordan High</Tab>
            </Tab.List>
            <Tab.Panels className="flex justify-center">
              <Tab.Panel>Content 1</Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
      
    </div>
  )
}

export default Home
