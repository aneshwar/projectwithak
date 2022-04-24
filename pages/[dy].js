import React from 'react'


export default function dy({data}) {

  return (
<>
{/* {render} */}
<div className='p-1 md:flex sm:flex xl:flex lg:flex'>
    <div className='bg-red-300'>
        <img src={data.data.urlToImage} alt="" className='sm:h-full'/>
    </div>
    <div className='py-2 flex flex-col space-y-2 font-bold sm:mx-3 sm:py-0 sm:justify-between lg:justify-center'>
        <div className='cursor-pointer text-blue-900'>{data.data.title}</div>
        <div className='cursor-pointer text-blue-900'>{data.data.description}</div>
        <div className='cursor-pointer text-blue-900'>{data.data.content}</div>

    </div>
  
</div>

  </>
  )
}
export async function getServerSideProps(context) {
   
    const id = context.query.dy
    const res = await fetch(`http://localhost:3000/api/notes/${id}`)
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}
