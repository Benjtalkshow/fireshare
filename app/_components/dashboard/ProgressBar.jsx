import React from 'react'

const ProgressBar = ({ progress = 60 }) => {
  return (
    <div className='my-3 cursor-progress progress'>
    <span id="ProgressLabel" className="sr-only">Loading</span>
  
    <span
      role="progressbar"
      aria-labelledby="ProgressLabel"
      aria-valuenow={progress}
      className="relative block rounded-full bg-gray-200"
    >
      <span className="absolute inset-0 flex items-center justify-center text-[10px]/4">
        <span className={`font-bold  ${parseInt(progress) >= 50  ? 'text-white' : 'text-teal-600'}`}> {progress}% </span>
      </span>
  
      <span className="block h-4 rounded-full bg-teal-600 text-center" style={{width: `${progress}%`}}> </span>
    </span>
  </div>
  )
}

export default ProgressBar;