import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Landing from '../components/Landing'

import { FetchCategories } from '../utils/FetchCategories'
import { FetchProducts } from '../utils/FetchProducts'
import { categories, products } from '../typings'
import Section from '../components/Section'

interface Props {
  categories : categories[]
  products : products[]
}

const Home = ({categories, products}: Props) => {


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
        <Section 
          categories={categories} 
          products = {products}
        />
      </section>
      
    </div>
  )
}

export default Home


export const getServerSideProps : GetServerSideProps = async () => {

  const categories : categories[] = await FetchCategories();
  const products : products[] = await FetchProducts();


  return {
    props : {
        categories,
        products
    }
  }

}