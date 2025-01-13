import LeftSide from '@/components/client/LeftSide'
import ProdDesc from '@/components/client/ProdDesc'
import React from 'react'
import Link from 'next/link'

interface Params {
    params: {
        id: string
    }
}

const page = (params: Params) => {
    const id = params.params.id
  return (
    
      
      <section className='min-h-[620px] w-full flex flex-col   items-center bg-primary '>
        <div className='w-full h-24 bg-secondary '>
         <h1 className='font-bold text-4xl  text-myorange text-center pt-6'>Client Single Product</h1>
         <Link className='text-myorange text-2xl px-2' href={"/clientfetch"}>Back to Shop 🏪</Link>
        </div>
      <div className=' h-full flex items-start justify-center pt-10 gap-8 md:gap-14 md:h-[730px] md:flex-row flex-col w-full md:w-[1440px] '>
      <LeftSide productId={id}/>
   <ProdDesc productId={id}/>

    </div>
    </section>
  )
}

export default page
