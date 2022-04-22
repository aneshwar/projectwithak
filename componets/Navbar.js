import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    <div className='flex justify-center m-5'>
        <div className='flex bg-yellow-400 space-x-5 justify-center px-3 rounded-full text-black font-bold'>
        <Link href="/"><p className='cursor-pointer opacity-90 hover:text-blue-900'>Home</p></Link>
       <Link href="/news"><p className='cursor-pointer opacity-90 hover:text-blue-900'>News</p></Link>
       <Link href="/letstnews"><p className='cursor-pointer opacity-90 hover:text-blue-900'>Letest News</p></Link>
       <Link href="/topheadlines"><p className='cursor-pointer opacity-90 hover:text-blue-900'>Top Headlines</p></Link>
        
        </div>
      


    </div>
  )
}
