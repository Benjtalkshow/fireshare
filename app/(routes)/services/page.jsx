import { tailwindPadding } from "@/app/_data/constants";
import React from "react";
import {
  Upload,
  Shield,
  CloudUpload,
  Lock,
  Share2,
  HeartHandshake,
} from "lucide-react";
import Footer from "@/app/_components/Footer";

const Services = () => {
  return (
    <div className={`bg-gray-100 ${tailwindPadding}`}>
      {/* Hero Section */}
      <div className="bg-teal-500 text-white py-32 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">
            Discover how our file-sharing platform can help you securely manage
            and collaborate on your files.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-xl mx-auto">
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
            <div className="bg-white shadow-md rounded-lg p-8">
              <div className="text-teal-500 mb-4">
                <Lock size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Access Control</h3>
              <p className="text-gray-600">
                Manage user access and permissions for your shared files,
                ensuring only authorized individuals can view or edit them.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-8">
              <div className="text-teal-500 mb-4">
                <Share2 size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Enterprise-Grade Reliability
              </h3>
              <p className="text-gray-600">
                Our platform is built on a reliable and scalable infrastructure,
                ensuring your files are always available and accessible.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-8">
              <div className="text-teal-500 mb-4">
                <HeartHandshake size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Dedicated Support</h3>
              <p className="text-gray-600">
                Our team of experts is available to assist you with any
                questions or issues, ensuring a seamless experience.
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
};

export default Services;
