import Head from 'next/head'




export default function Home(data) {


  
  return (
    <div>
      <Head>
        <title>Create Next App</title>
       

      </Head>
       <h2 className='bg-fuchsia-900 mx-56 item-center text-amber-600'>aneshwar</h2>
  
   
   <h2>aneshwar</h2>

    </div>
  )
}
// export async function getServerSideProps() {
//   // const res = await  fetch('https://jsonplaceholder.typicode.com/posts')
//   const res = await fetch('http://localhost:8080')
//   const data = await res.json()
//   return {
//     props: {
//       data,
//     }
//   }
// }


// const res = await  fetch('https://jsonplaceholder.typicode.com/posts')