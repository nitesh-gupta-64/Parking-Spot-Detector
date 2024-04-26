import React from 'react'
import video3 from "../Videos/video3.mp4"

const Video3 = () => {
  return (
    <div>
        <video autoPlay controls loop muted playsInline className='w-full h-full object-cover absolute top-0 left-0'>
          <source src={video3}/>
        </video>
    </div>
  )
}

export default Video3