'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">آي زد ميديا</span>
              <svg
                className="h-8 w-auto sm:h-10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8L8 14L14 8"
                  stroke="#F97316"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 14L16 20L22 14"
                  stroke="#F97316"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <div className="z-50 ml-2 my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">افتح القائمة</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link
              href="#services"
              className="text-base font-medium text-gray-500 hover:text-gray-900 mx-2"
            >
              خدماتنا
            </Link>
            <Link
              href="#clients"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              عملاؤنا
            </Link>
            <Link
              href="#gallery"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              معرض أعمالنا
            </Link>
            <Link
              href="#contact"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              اتصل بنا
            </Link>
          </nav>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-left md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex justify-between">
                <div>
                  <svg
                    className="h-8 w-auto"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 8L8 14L14 8"
                      stroke="#F97316"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 14L16 20L22 14"
                      stroke="#F97316"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">أغلق القائمة</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link
                    href="#services"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    خدماتنا
                  </Link>
                  <Link
                    href="#clients"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    عملاؤنا
                  </Link>
                  <Link
                    href="#gallery"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    معرض أعمالنا
                  </Link>
                  <Link
                    href="#contact"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    اتصل بنا
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
