import React from 'react'
import video2 from "../Videos/video2.mp4"

const Video2 = () => {
  return (
    <div>
        <video autoPlay loop muted playsInline controls className='w-full h-full object-cover absolute top-0 left-0'>
          <source src={video2}/>
        </video>
    </div>
  )
}

export default Video2