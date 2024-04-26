import React from 'react'
import video1 from "../Videos/video1.mp4"

const Video1 = () => {
  return (
    <div>
        <video autoPlay loop controls muted playsInline className='w-full h-full object-cover absolute top-0 left-0'>
          <source src={video1}/>
        </video>
    </div>
  )
}

export default Video1