import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute left-0 inset-y-0 h-full w-48 text-white transform -translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-right">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">حلول مبتكرة لنجاح</span>{' '}
                <span className="block text-orange-600 xl:inline">
                  علامتك التجارية
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                نقدم استراتيجيات إعلامية وإعلانية متطورة لمساعدة علامتك التجارية
                على التميز في المشهد الرقمي. من الحملات الإبداعية إلى الرؤى
                المدفوعة بالبيانات، نحن نغطي كل احتياجاتك.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
                <div className="rounded-md shadow">
                  <Link
                    href="#contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10"
                  >
                    ابدأ الآن
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:mr-3">
                  <Link
                    href="#services"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-700 bg-orange-100 hover:bg-orange-200 md:py-4 md:text-lg md:px-10"
                  >
                    اعرف المزيد
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/iz.jpg"
          alt="فريق يعمل على حملة إعلانية"
        />
      </div>
    </div>
  );
};

export default Hero;
