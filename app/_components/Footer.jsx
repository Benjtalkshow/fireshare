"use client";
import React from "react";
import {
  Home,
  FileText,
  BookOpen,
  Users,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { tailwindPadding } from "../_data/constants";

const Footer = () => {
  const pathname = usePathname();

  if (
    pathname == "/file" ||
    pathname == "/upgrade" ||
    pathname == "/dashboard" ||
    pathname.startsWith("/preview") ||
    pathname.startsWith("/view")
  ) {
    return <></>;
  }
  return (
    <footer
      className={`${tailwindPadding} bg-teal-500 text-white py-12 px-4 sm:px-8 md:px-16 lg:px-24 mt-20`}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:underline"
                >
                  <Home size={18} />
                  <span>Our Mission</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:underline"
                >
                  <FileText size={18} />
                  <span>Our Values</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:underline"
                >
                  <Users size={18} />
                  <span>Team</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:underline"
                >
                  <BookOpen size={18} />
                  <span>Careers</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:underline"
                >
                  <FileText size={18} />
                  <span>File Sharing</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:underline"
                >
                  <FileText size={18} />
                  <span>Secure Storage</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:underline"
                >
                  <Users size={18} />
                  <span>Collaboration</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:underline"
                >
                  <BookOpen size={18} />
                  <span>Enterprise Solutions</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:underline"
                >
                  <FileText size={18} />
                  <span>Help Center</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:underline"
                >
                  <BookOpen size={18} />
                  <span>Documentation</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:underline"
                >
                  <FileText size={18} />
                  <span>Blog</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:underline"
                >
                  <FileText size={18} />
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-2xl hover:text-gray-300 transition-colors duration-300"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="text-2xl hover:text-gray-300 transition-colors duration-300"
              >
                <Twitter />
              </a>
              <a
                href="#"
                className="text-2xl hover:text-gray-300 transition-colors duration-300"
              >
                <Linkedin />
              </a>
              <a
                href="#"
                className="text-2xl hover:text-gray-300 transition-colors duration-300"
              >
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-teal-600 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} File Sharing Platform. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
