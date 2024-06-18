import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverGroup,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import {
  PresentationChartBarIcon,
  Bars3Icon,
  CodeBracketIcon,
  CircleStackIcon,
  Square3Stack3DIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  BriefcaseIcon,
} from "@heroicons/react/20/solid";
import logo from "../../assets/shared/logo1.svg";
import useScrollPosition from "../../hooks/useScrollPosition";

const projects = [
  {
    name: "Frontend",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: CodeBracketIcon,
  },
  {
    name: "Backend",
    description: "Speak directly to your customers",
    href: "#",
    icon: CircleStackIcon,
  },
  {
    name: "Full-Stack",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: Square3Stack3DIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Data Science",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: PresentationChartBarIcon,
  },
];
const callsToAction = [
  { name: "Hire me", href: "#", icon: BriefcaseIcon },
  { name: "Contact me", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  return (
    <header
      className={classNames(
        scrollPosition > 0 ? "bg-stone-50 shadow-sm" : "bg-stone-50 opacity-95",
        "sticky inset-x-0 top-0 z-40"
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
        <a className="flex-none text-slate-900" href="/">
            <span className="sr-only">Phillip Chapita Portfolio</span>
            <p className={classNames(scrollPosition > 0 ? "text-lg":"h-5 w-auto sm:text-sm text-base lg:text-xl", "font-amsterdam")}>Phillip Chapita</p>
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
          
          <a href="#about" className="text-sm font-semibold leading-6 text-gray-900">
            About
          </a>
          <a href="#services" className="text-sm font-semibold leading-6 text-gray-900">
            Services
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Projects
          </a>
          {/* <Popover className="relative">
            <PopoverButton className="flex outline-none items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Projects
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </PopoverButton>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute -left-44 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {projects.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-red-300"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
          </Popover> */}
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Contact
          </a>
        </PopoverGroup>
        <div className="hidden lg:ml-8 lg:flex lg:items-center lg:border-l lg:border-slate-900/15 lg:pl-8">
          
          <div className="lg:ms-1 flex">
            <a className="inline-flex flex-shrink-0 justify-center items-center size-9 font-medium rounded-full text-gray-800 hover:bg-gray-200" href="https://www.figma.com/community/file/1179068859697769656" target="_blank">
              <svg className="flex-shrink-0 size-4" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.875 18C8.531 18 9.875 16.656 9.875 15V12H6.875C5.219 12 3.875 13.344 3.875 15C3.875 16.656 5.219 18 6.875 18Z" fill="#0ACF83"></path>
                <path d="M3.875 9C3.875 7.344 5.219 6 6.875 6H9.875V12H6.875C5.219 12 3.875 10.656 3.875 9Z" fill="#A259FF"></path>
                <path d="M3.875 3C3.875 1.344 5.219 0 6.875 0H9.875V6H6.875C5.219 6 3.875 4.656 3.875 3Z" fill="#F24E1E"></path>
                <path d="M9.87501 0H12.875C14.531 0 15.875 1.344 15.875 3C15.875 4.656 14.531 6 12.875 6H9.87501V0Z" fill="#FF7262"></path>
                <path d="M15.875 9C15.875 10.656 14.531 12 12.875 12C11.219 12 9.87501 10.656 9.87501 9C9.87501 7.344 11.219 6 12.875 6C14.531 6 15.875 7.344 15.875 9Z" fill="#1ABCFE"></path>
              </svg>
            </a>
            <a className="inline-flex flex-shrink-0 justify-center items-center size-9 font-medium rounded-full text-gray-800 hover:bg-gray-200" href="https://github.com/htmlstreamofficial/preline" target="_blank">
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
            <a className="inline-flex flex-shrink-0 justify-center items-center size-9 font-medium rounded-full text-gray-800 hover:bg-gray-200" href="https://twitter.com/prelineUI" target="_blank">
              <svg className="flex-shrink-0 size-3.5" width="48" height="50" viewBox="0 0 48 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.5665 20.7714L46.4356 0H42.2012L26.6855 18.0355L14.2931 0H0L18.7397 27.2728L0 49.0548H4.23464L20.6196 30.0087L33.7069 49.0548H48L28.5655 20.7714H28.5665ZM22.7666 27.5131L5.76044 3.18778H12.2646L42.2032 46.012H35.699L22.7666 27.5142V27.5131Z" fill="currentColor"></path>
              </svg>
            </a>
          </div>
          <a
              className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700  ml-8"
              href="/all-access"
            >
              <span>
                Download CV <span aria-hidden="true">→</span>
              </span>
            </a>        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Phillip Chapita</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
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
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Home
                      </a>
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        About
                      </a>
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Services
                      </a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                     
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Portfolio
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...projects, ...callsToAction].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                <a
                  href="#"
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
    </header>
  );
}
