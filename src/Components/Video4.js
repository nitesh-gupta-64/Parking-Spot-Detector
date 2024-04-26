import React from 'react'
import video4 from "../Videos/video4.mp4"

const Video4 = () => {
  return (
    <div>
        <video autoPlay loop controls muted playsInline className='w-full h-full object-cover absolute top-0 left-0'>
          <source src={video4}/>
        </video>
    </div>
  )
}

export default Video4