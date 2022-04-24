import React from 'react'
import Link from 'next/link'
export default function letestnews({news}) {

   
    const render = news.data.map((a) => {
        const {_id,author,urlToImage, title,publishedAt,description, url, content } = a;
        return (
            <div key={_id} className='px-1 py-2 flex-none space-y-1 font-bold italic shadow-2xl bg-gray-100 justify-center'>
                <Link href={`/letestnews/${_id}`}><img src={urlToImage} alt="" className='h-64'/></Link>
                
                <Link href={`/letestnews/${_id}`}><p className='text-2xl line-clamp-2 text-blue-900 cursor-pointer'>{title}</p></Link>

                <Link href={`/letestnews/${_id}`}><p className='text-xl line-clamp-2 text-green-800' cursor-pointer >{description}</p></Link>
                <Link href={`/letestnews/${_id}`}><p className='text-lg line-clamp-1 text-sky-900 cursor-pointer '>{content}</p></Link>
            </div>
        )
    })
  return (
    <div className='grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>{render}</div>
  )
}
export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/note2')
    const news = await res.json()
    return {
      props: {
        news
      }
    }
 }