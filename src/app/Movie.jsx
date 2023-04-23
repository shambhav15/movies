import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function Movie({ title, id, poster_path, release_date }) {

    const imagePath = "https://image.tmdb.org/t/p/original"
    console.log(imagePath);
    console.log(poster_path);
    return (
        <div className='text-center items-center justify-center px-5 px-auto py-5 mx-auto cursor-pointer'>

            <Link href={`${id}`}>
                <Image className='rounded-lg'
                 src={imagePath + poster_path} width={500} height={500} />
            </Link>
            <div className='border border-gray-500 rounded-full hover:text-orange-300
            hover:border-orange-600 '>
                <h1 className='text-sm py-2 pd-1'>{title}</h1>
                <h2>{release_date}</h2>
            </div>
        </div>
    )
}

export default Movie
