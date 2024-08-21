export default function Footer() {
  let currentYear = new Date().getFullYear();
  return (
    <footer className="w-full py-14 bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <a
            href="/"
            aria-label="Phillip Chapita"
            className="flex justify-center text-lg font-medium font-amsterdam"
          >
            Phillip Chapita
          </a>
          <ul className="font-medium flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b border-gray-200">
            <li>
              <a href="#about" className="text-gray-800 hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className=" text-gray-800 hover:text-gray-900"
              >
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className=" text-gray-800 hover:text-gray-900">
                Contact
              </a>
            </li>
          </ul>
          <div className="flex space-x-10 justify-center items-center mb-14">
            <a
              className="block text-gray-900 transition-all duration-500 "
              href="https://www.figma.com/@phillipchapita"
              target="_blank"
            >
              <svg
                className="flex-shrink-0 size-6"
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.875 18C8.531 18 9.875 16.656 9.875 15V12H6.875C5.219 12 3.875 13.344 3.875 15C3.875 16.656 5.219 18 6.875 18Z"
                  fill="#0ACF83"
                ></path>
                <path
                  d="M3.875 9C3.875 7.344 5.219 6 6.875 6H9.875V12H6.875C5.219 12 3.875 10.656 3.875 9Z"
                  fill="#A259FF"
                ></path>
                <path
                  d="M3.875 3C3.875 1.344 5.219 0 6.875 0H9.875V6H6.875C5.219 6 3.875 4.656 3.875 3Z"
                  fill="#F24E1E"
                ></path>
                <path
                  d="M9.87501 0H12.875C14.531 0 15.875 1.344 15.875 3C15.875 4.656 14.531 6 12.875 6H9.87501V0Z"
                  fill="#FF7262"
                ></path>
                <path
                  d="M15.875 9C15.875 10.656 14.531 12 12.875 12C11.219 12 9.87501 10.656 9.87501 9C9.87501 7.344 11.219 6 12.875 6C14.531 6 15.875 7.344 15.875 9Z"
                  fill="#1ABCFE"
                ></path>
              </svg>
            </a>
            <a
              className="block text-gray-900 transition-all duration-500text-gray-800 "
              href="https://github.com/phil23-4"
              target="_blank"
            >
              <svg
                className="flex-shrink-0 size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
            <a
              className="block text-gray-900 transition-all duration-500 "
              href="https://www.upwork.com/freelancers/~019a6fc81ef4592218?mp_source=share"
              target="_blank"
            >
              <svg
                className="flex-shrink-0 size-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 641 512"
              >
                <path
                  fill="#6FDA44"
                  d="M494.7 295.6c-50.3 0-83.5-38.9-92.8-53.9c11.9-95.3 46.8-125.4 92.8-125.4c45.5 0 80.9 36.4 80.9 89.7s-35.4 89.7-80.9 89.7zm0-237.8c-81.9 0-127.8 53.4-141 108.4c-14.9-28-25.9-65.5-34.5-100.3H206v141c0 51.1-23.3 89-68.8 89s-71.6-37.8-71.6-89l.5-141H.8v141c0 41.1 13.3 78.4 37.6 105.1c25 27.5 59.2 41.8 98.8 41.8c78.8 0 133.8-60.4 133.8-146.9V112.1c8.2 31.2 27.8 91.1 65.3 143.6l-35 199.4h66.4l23.1-141.3c7.6 6.3 15.7 12 24.2 17c22.2 14 47.7 21.9 73.9 22.8c0 0 4 .2 6.1 .2c81.2 0 145.9-62.9 145.9-147.8s-64.8-148.1-146-148.1z"
                />
              </svg>
            </a>
          </div>
          <span className="text-center block">
            © <a href="https://pagedone.io/">Phillip Francis Chapita</a>{" "}
            {currentYear}, All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
