import React from 'react';
import Image from "next/image"

const ImageSection = ({id, url}) => {
  return (
    <div className='border-gray-300 border-[1px] rounded-md p-5'>
        {id}
        <Image src={url} width={120} height={120} />
        </div>
  )
}

export default ImageSection