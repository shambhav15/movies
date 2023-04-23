import React from 'react'
import Image from 'next/image'

// export const revalidate = 60

async function page({ params }) {
  const imagePath = "https://image.tmdb.org/t/p/original"

  const { movie } = params

  const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)

  const res = await data.json()
  return (
    <div>
      <div>
        <h1 className='text-5xl'>{res.title}</h1>
        <h2 className='text-3xl'>{res.release_date}</h2>
        <h2 className='text-2xl'>Runtime: {res.runtime} minutes</h2>
        <h2 className='text-sm border bg-green-600 inline-block rounded-md py-2 px-4 mx-2 my-2'>{res.status}</h2>
        <Image className='w-full my-12' src={imagePath + res.backdrop_path} width={1000} height={1000} />
        <p>{res.overview}</p>
      </div>
    </div>
  )
}

export default page
