import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    <>
    <div className='flex items-center py-2 justify-around'>
        <div className='bg-yellow-400 flex opacity-70 hover:opacity-100 rounded-full px-2 font-bold h-8 items-center justify-center'>Aneshwar</div>
        <div className='flex bg-yellow-400 space-x-5 justify-center px-3 rounded-full text-black font-bold h-8 items-center'>
        <Link href="/"><p className='cursor-pointer opacity-90 hover:text-blue-900'>Home</p></Link>
       <Link href="/news"><p className='cursor-pointer opacity-90 hover:text-blue-900'>News</p></Link>
       <Link href="/letestnews"><p className='cursor-pointer opacity-90 hover:text-blue-900'>Letest News</p></Link>
       <Link href="/topheadlines"><p className='cursor-pointer opacity-90 hover:text-blue-900'>Top Headlines</p></Link>
        
        </div>
       <div className='flex items-center justify-center'>
          <img src="FB_IMG_1621536481461.jpg" alt="" className=' rounded-lg h-14 w-16'/>
        </div>
      


    </div>
   
  </>)
}
