import React from 'react'
import Home from '../componets/Home'


export default function index({data}) {
  
  return (
      <>
    <Home data={data} />
  


      </>
  )
}
export async function getServerSideProps() {
   const res = await fetch('http://localhost:3000/api/notes')
   const data = await res.json()
   return {
     props: {
       data
     }
   }
}