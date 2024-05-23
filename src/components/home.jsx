import {
  InformationCircleIcon,
  AtSymbolIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
const homeData = [
  {
    title: " About Me",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    more: "Learn More",
    icon: InformationCircleIcon,
  },
  {
    title: " My Work",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    more: "Browse Portfolio",
    icon: BriefcaseIcon,
  },
];

export default function Hero() {
  return (
    <>
      <div className="overflow-hidden bg-stone-50 py-24 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="col-span-2">hello world</div>
            <div>
              {/* <!-- Icon Blocks --> */}
              <div className="mx-auto">
                <div className="grid sm:grid-cols-2 lg:grid-cols-1 items-center gap-6">
                  {/* <!-- Card --> */}
                  {homeData.map((item) => (
                    <a
                      key={item.name}
                      className="group flex gap-y-6 size-full rounded-lg p-2 transition-all lg:hover:scale-105"
                      href="#"
                    >
                      <div className="flex-shrink-0 size-8 text-gray-800 mt-0.5 me-6">
                        <item.icon
                          className="h-8 w-8 text-gray-600 group-hover:text-gray-800"
                          aria-hidden="true"
                        />
                      </div>

                      <div>
                        <div>
                          <h3 className="block font-bold uppercase text-gray-800">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 pt-4 text-balance">
                            {item.description}
                          </p>
                        </div>

                        <p className="mt-8 inline-flex items-center uppercase gap-x-1 text-sm font-semibold text-gray-800">
                          {item.more}
                          <svg
                            className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </p>
                        <hr className="h-px my-6 bg-gray-300 border-0"></hr>
                      </div>
                    </a>
                  ))}

                  {/* <!-- End Card --> */}

                  {/* Social Media Handles */}
                  <div className="flex  size-full p-5  ">
                    <div className="flex-shrink-0 size-8 text-gray-800 mt-0.5 me-6">
                      <AtSymbolIcon
                        className="h-8 w-8 text-gray-600 group-hover:text-gray-800"
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <div>
                        <h3 className="block font-bold uppercase text-gray-800 ">
                          Follow Me
                        </h3>
                      </div>

                      <div className="mt-8 ">
                        <div className="lg:ms-1 inline-flex items-center gap-x-6">
                          <a
                            className="inline-flex flex-shrink-0 justify-center items-center size-9 font-medium  text-gray-800 hover:scale-125"
                            href="https://www.figma.com/community/file/1179068859697769656"
                            target="_blank"
                          >
                            <svg
                              className="flex-shrink-0 size-8"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
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
                            className="inline-flex flex-shrink-0 justify-center items-center size-9 font-medium  text-gray-800 hover:scale-125"
                            href="https://github.com/htmlstreamofficial/preline"
                            target="_blank"
                          >
                            <svg
                              className="flex-shrink-0 size-8"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                          </a>
                          <a
                            className="inline-flex flex-shrink-0 justify-center items-center size-8 font-medium  text-gray-800 hover:scale-125"
                            href="https://twitter.com/prelineUI"
                            target="_blank"
                          >
                            <svg
                              className="flex-shrink-0 size-6 pb-1"
                              width="50"
                              height="52"
                              viewBox="0 0 50 52"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M28.5665 20.7714L46.4356 0H42.2012L26.6855 18.0355L14.2931 0H0L18.7397 27.2728L0 49.0548H4.23464L20.6196 30.0087L33.7069 49.0548H48L28.5655 20.7714H28.5665ZM22.7666 27.5131L5.76044 3.18778H12.2646L42.2032 46.012H35.699L22.7666 27.5142V27.5131Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Icon Blocks --> */}
            </div>
          </div>

          {/* About Section */}
        </div>
      </div>
      <div className="overflow-hidden bg-stone-100 py-24 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid ma-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-xl font-bold tracking-wide leading-10 text-gray-800 sm:text-xl">
                <span className="text-orange-600"> /</span> ABOUT ME
              </h2>
              <h2 className="text-2xl font-bold tracking-wide leading-10 text-gray-800 sm:text-5xl mt-6">
                I&apos;ve been developing websites since 2018
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <a className="mt-12 inline-flex cursor-pointer items-center gap-x-1 text-xl font-semibold text-gray-800">
                More about me
                <svg
                  className="flex-shrink-0 size-4 transition ease-in-out hover:underline hover:translate-x-1 focus:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
}
