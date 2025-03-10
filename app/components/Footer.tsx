import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  الحلول
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      التسويق الرقمي
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      إنشاء المحتوى
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      التخطيط الإعلامي
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      التحليلات والرؤى
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  الشركة
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      عن الشركة
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      الوظائف
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      الشركاء
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              اشترك في نشرتنا الإخبارية
            </h3>
            <p className="mt-4 text-base text-gray-300">
              آخر الأخبار والمقالات والموارد، ترسل إلى صندوق بريدك أسبوعياً.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                عنوان البريد الإلكتروني
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
                placeholder="أدخل بريدك الإلكتروني"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:mr-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-orange-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-orange-500"
                >
                  اشترك
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <Link href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">فيسبوك</span>
              <Facebook className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">إنستغرام</span>
              <Instagram className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">تويتر</span>
              <Twitter className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">لينكد إن</span>
              <Linkedin className="h-6 w-6" aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2023 آي زد ميديا. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
