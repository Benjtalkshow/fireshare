import React from 'react';
import { UserPlus, ShieldCheck, FileText, CloudUpload, Users, Briefcase } from 'lucide-react';
import { tailwindPadding } from '@/app/_data/constants';

const AboutUs = () => {
  return (
    <div className={`bg-gray-100 ${tailwindPadding}`}>
      {/* Hero Section */}
      <div className="bg-teal-500 text-white py-32 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            About Our File Sharing Platform
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">
            Learn more about our mission, values, and how we can help you securely share
            and collaborate on your files.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            Our Mission and Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-8">
              <div className="text-teal-500 mb-4">
                <UserPlus size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Easy Collaboration</h3>
              <p className="text-gray-600">
                We believe in making file sharing and collaboration effortless, so you can
                focus on your work.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-8">
              <div className="text-teal-500 mb-4">
                <ShieldCheck size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Secure by Design</h3>
              <p className="text-gray-600">
                Your data security is our top priority. We use advanced encryption and
                access controls to protect your files.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-8">
              <div className="text-teal-500 mb-4">
                <FileText size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Intuitive Interface</h3>
              <p className="text-gray-600">
                Our platform is designed with user-friendliness in mind, making it easy
                for anyone to share and manage their files.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-8">
              <div className="text-teal-500 mb-4">
                <CloudUpload size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Reliable Infrastructure</h3>
              <p className="text-gray-600">
                Our platform is built on a robust and scalable infrastructure, ensuring
                your files are always available and accessible.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-8">
              <div className="text-teal-500 mb-4">
                <Users size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Dedicated Support</h3>
              <p className="text-gray-600">
                Our team of experts is committed to providing personalized support and
                ensuring a seamless experience for our users.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-8">
              <div className="text-teal-500 mb-4">
                <Briefcase size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Enterprise-Ready</h3>
              <p className="text-gray-600">
                Our platform is designed to meet the needs of businesses of all sizes,
                with advanced features and scalability.
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
            Our file-sharing platform is free to use and easy to get started with.
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

export default AboutUs;