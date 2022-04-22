import React from 'react'

export default function dy({data}) {
   
    const {title, description, url, _id, author,urlToImage,publishedAt,content } = data;
  return (
    <div className='flex space-x-4 p-5'>
        <div className='flex justify-center'>
               <img src={data.data.urlToImage} alt="" className=''/>
        </div>
       
        <div className=''>
            <div className='flex justify-between'>
                <p className=''>{data.data.author}</p>
            <p className=''>{data.data.publishedAt}</p>
            </div>
            
       
       <div className='grid grid-rows-3 grid-flow-col gap-4 text-2xl '>
       <p className=''>{data.data.title}</p>
        <p>{data.data.description}</p>
        <p>{data.data.content}</p>
       </div>
  
     

 </div>
    </div>
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