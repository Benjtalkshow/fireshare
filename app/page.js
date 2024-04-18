import { tailwindPadding } from "./_data/constants";
import { Upload, Shield, CloudUpload } from "lucide-react";

export default function Home() {
  return (
    <div className={`bg-gray-100  ${tailwindPadding}`}>
      {/* Hero Section */}
      <div className="bg-teal-500 text-white py-32 px-4 sm:px-8 md:px-16 lg:px-24 relative">
        <div className="max-w-screen-xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Securely Share Your Files
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">
            Our file-sharing platform makes it easy to upload, store, and share
            your files with anyone, anywhere.
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#"
              className="bg-white text-teal-500 px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-200 transition-colors duration-300"
            >
              Get Started
            </a>
            <a
              href="#"
              className="text-white underline hover:no-underline transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 sm:px-8 md:px-16 lg:px-24">
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

      {/* Call to Action Section */}
      <div className="bg-teal-500 text-white py-16 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Start Sharing Your Files Today
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">
            Our file-sharing platform is free to use and easy to get started
            with.
          </p>
          <a
            href="#"
            className="bg-white text-teal-500 px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-200 transition-colors duration-300"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
