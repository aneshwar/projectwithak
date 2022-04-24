import React from 'react'
import Link from 'next/link';
export default function Home({data}) {
  
   const news = data.data.map((a, i) => {
       const {title, description, url, _id, author,urlToImage,publishedAt,content } = a;
       return (
         
         <div key={url} className='p-3 text-center space-y-2 shadow'>
           
           <div className='flex justify-center'>
            
            <Link href={`/${_id}`}><img className='w-96 h-56 cursor-pointer' src={urlToImage} alt="" /></Link>
           </div>
           <Link href={`/${_id}`}><p className='cursor-pointer font-bold line-clamp-2 text-xl text-green-900'>{title}</p></Link>
           <Link href={`/${_id}`}><p className='cursor-pointer font-semibold line-clamp-2 text-red-900'>{description}</p></Link>
           <Link href={`/${_id}`}><p className='cursor-pointer line-clamp-2 text-sm text-blue-900'>{content}</p></Link>
            <div className='flex bg-red-300 justify-around rounded-full'>
            <Link href={`/${_id}`}><p className='cursor-pointer  font-semibold italic text-sky-900 uppercase line-clamp-1'>{author}</p></Link>
            <Link href={`/${_id}`}><p className='cursor-pointer text-left text-green-900 truncate'>{publishedAt}</p></Link>
            
            </div>
           

            
</div>
       
       )
   })
  return (
    <div className='grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2'>
     {news}
    </div>
  )
}
