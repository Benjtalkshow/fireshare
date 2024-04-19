import { CloudUpload, Shield, Upload } from 'lucide-react'
import React from 'react'
import { tailwindFeatureMargin } from '../_data/constants'

const Feature = () => {
  return (
<div className={`py-16 ${tailwindFeatureMargin}`}>
{/* <div className={`py-16 px-4 sm:px-8 md:px-16 lg:px-24`}> */}

        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            Features that Matter
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-8">
              <div className="text-teal-500 mb-4">
                <Upload size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Easy Upload</h3>
              <p className="text-gray-600">
                Drag and drop your files or select them from your device to
                start sharing instantly.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-8">
              <div className="text-teal-500 mb-4">
                <Shield size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Secure Storage</h3>
              <p className="text-gray-600">
                Your files are encrypted and stored securely, ensuring your data
                is protected.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-8">
              <div className="text-teal-500 mb-4">
                <CloudUpload size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Seamless Sharing</h3>
              <p className="text-gray-600">
                Share files with anyone, anywhere, and let them download with
                just a click.
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Feature