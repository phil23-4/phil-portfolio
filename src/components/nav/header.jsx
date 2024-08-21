import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import useScrollPosition from "../../hooks/useScrollPosition";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  return (
    <header
      className={classNames(
        scrollPosition > 0
          ? "sticky inset-x-0 top-0 z-40 bg-stone-50 shadow-sm"
          : "flex-none bg-stone-50 opacity-95",
        "w-full text-sm font-semibold leading-6 text-slate-900"
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a className="flex-none font-medium" href="/">
            <span className="sr-only">Phillip Chapita Portfolio</span>
            <p
              className={classNames(
                scrollPosition > 0
                  ? "text-lg"
                  : "h-5 w-auto sm:text-sm text-base lg:text-xl",
                "font-amsterdam"
              )}
            >
              Phillip Chapita
            </p>
          </a>
        </div>
        {/* Mobile Menu */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex  lg:gap-x-10">
          <a
            href="#about"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            About
          </a>

          <a
            href="#projects"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Contact
          </a>
        </PopoverGroup>
        <div className="hidden lg:ml-8 lg:flex lg:items-center lg:border-l lg:border-slate-900/15 lg:pl-8">
          <div className="lg:ms-1 flex">
            <a
              className="inline-flex flex-shrink-0 justify-center items-center size-9 font-medium rounded-full text-gray-800 hover:bg-gray-200"
              href="https://www.figma.com/@phillipchapita"
              target="_blank"
            >
              <svg
                className="flex-shrink-0 size-4"
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
              className="inline-flex flex-shrink-0 justify-center items-center size-9 font-medium rounded-full text-gray-800 hover:bg-gray-200"
              href="https://github.com/phil23-4"
              target="_blank"
            >
              <svg
                className="flex-shrink-0 size-4"
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
              className="inline-flex flex-shrink-0 justify-center items-center size-9 font-medium rounded-full text-gray-800 hover:bg-gray-200"
              href="https://www.upwork.com/freelancers/~019a6fc81ef4592218?mp_source=share"
              target="_blank"
            >
              <svg
                className="flex-shrink-0 size-4"
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
          <a
            className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700  ml-8"
            href="/resume.pdf"
            target="_blank"
          >
            <span>
              Download CV <span aria-hidden="true">→</span>
            </span>
          </a>{" "}
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Phillip Chapita</span>
              <p className="h-5 w-auto text-sm font-amsterdam">
                Phillip Chapita
              </p>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Portfolio
                </a>

                <a
                  href="#contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      <div
        className={classNames(
          scrollPosition > 500 ? "fixed bottom-0 right-0 p-4" : "hidden"
        )}
      >
        <button
          className="bg-slate-900 text-white hover:bg-slate-700 rounded-full w-12 h-12 flex items-center justify-center hover:shadow-md"
          onClick={
            (window.goToTop = function () {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            })
          }
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
