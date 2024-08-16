import {
  InformationCircleIcon,
  AtSymbolIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava, faNodeJs, faPython } from "@fortawesome/free-brands-svg-icons";

const techStack = [
  {
    id: 1,
    name: "Java",
    icon: faJava,
  },
  {
    id: 2,
    name: "Node.js",
    icon: faNodeJs,
  },
  {
    id: 3,
    name: "Python",
    icon: faPython,
  },
];

const homeData = [
  {
    id: 1,
    title: " About Me",
    description:
      "My journey started with a Bachelor's degree in Computer Science, and I've since branched into the world of data analytics with a Master's degree in Applied Statistics.",
    more: "Learn more",
    href: "#about",
    icon: InformationCircleIcon,
  },
  {
    id: 2,
    title: " My Work",
    description:
      "My work philosophy centers on crafting simple yet innovative solutions that are tailored to the end user's needs and experience.",
    more: "Browse Portfolio",
    href: "#projects",
    icon: BriefcaseIcon,
  },
];

export default function Hero() {
  return (
    <>
      <div className="overflow-hidden bg-stone-50 py-24 lg:py-28 sm:py-12 md:bg-hero-bg bg-no-repeat bg-center">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 ">
          <div className="mx-auto grid  grid-cols-1 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-full lg:grid-cols-2">
            <div className="mx-auto max-w-[40rem] pb-16 pt-16 lg:mx-0 lg:w-[40rem] lg:max-w-none lg:flex-none lg:pb-24 lg:pr-4 lg:pt-20">
              <p className="mt-4 text-5xl font-extrabold tracking-[-0.04em] text-black sm:text-5xl sm:leading-[3.5rem]">
                Phillip F. Chapita
              </p>
              <p className="mt-4 lg:text-lg font-bold tracking-[-0.04em] text-gray-800 sm:text-xl sm:leading-[3.5rem]">
                {" "}
                Software Developer | Data Scientist
              </p>
              <div className="flex flex-wrap gap-6 mt-4">
                {techStack.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center text-sm font-medium text-slate-700"
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="h-8 w-8 flex-none stroke-current text-slate-600"
                      fill="none"
                    />
                    <span className="ml-2.5">{item.name}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-base text-balance leading-7 text-slate-600">
                {/* Junior software developer with a focus on building engaging & accessible digital experiences */}
                I specialize in creating dynamic websites and analyzing complex
                data sets, bringing over 3 years of expertise to every project.
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"
                  href="#contact"
                >
                  <span>
                    Contact Me{" "}
                    <span
                      aria-hidden="true"
                      className="text-slate-400 sm:inline"
                    >
                      →
                    </span>
                  </span>
                </a>
                <a
                  className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 "
                  href="/resume.pdf"
                  target="_blank"
                >
                  <span>
                    Download CV{" "}
                    <span
                      aria-hidden="true"
                      className="text-black/25 sm:inline"
                    >
                      →
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {/* <!-- Icon Blocks --> */}
            <div className="mx-auto items-end">
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 items-center gap-6">
                {/* <!-- Card --> */}
                {homeData.map((item) => (
                  <div
                    key={item.id}
                    className="group flex  lg:py-2 gap-y-6 size-full lg:max-w-sm p-2"
                    href={item.href}
                  >
                    <div className="flex-shrink-0 size-8 text-gray-800 mt-0.5 me-6">
                      <item.icon
                        className="h-8 w-8 text-gray-600 group-hover:text-gray-800"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="lg:border-b lg:border-slate-900/15 lg:pb-8">
                      <div>
                        <h3 className="block font-bold tracking-wider text-gray-800">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 pt-4 text-pretty">
                          {item.description}
                        </p>
                      </div>

                      <a href={item.href}>
                        <p className="mt-8 inline-flex items-center tracking-wider gap-x-1 text-sm font-semibold text-gray-800">
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
                      </a>
                    </div>
                  </div>
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
                      <h3 className="block font-bold tracking-wider text-gray-800 ">
                        Follow Me
                      </h3>
                    </div>

                    <div className="mt-8">
                      <div className="lg:ms-1 inline-flex items-center gap-x-6">
                        <a
                          className="inline-flex flex-shrink-0 justify-center items-center size-9 font-medium  text-gray-800 hover:scale-125"
                          href="https://www.figma.com/@phillipchapita"
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
                          href="https://github.com/phil23-4"
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
                          href="https://www.upwork.com/freelancers/~019a6fc81ef4592218?mp_source=share"
                          target="_blank"
                        >
                          <svg
                            className="flex-shrink-0 size-8"
                            width="24"
                            height="24"
                            fill="#6FDA44"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 641 512"
                          >
                            <path d="M494.7 295.6c-50.3 0-83.5-38.9-92.8-53.9c11.9-95.3 46.8-125.4 92.8-125.4c45.5 0 80.9 36.4 80.9 89.7s-35.4 89.7-80.9 89.7zm0-237.8c-81.9 0-127.8 53.4-141 108.4c-14.9-28-25.9-65.5-34.5-100.3H206v141c0 51.1-23.3 89-68.8 89s-71.6-37.8-71.6-89l.5-141H.8v141c0 41.1 13.3 78.4 37.6 105.1c25 27.5 59.2 41.8 98.8 41.8c78.8 0 133.8-60.4 133.8-146.9V112.1c8.2 31.2 27.8 91.1 65.3 143.6l-35 199.4h66.4l23.1-141.3c7.6 6.3 15.7 12 24.2 17c22.2 14 47.7 21.9 73.9 22.8c0 0 4 .2 6.1 .2c81.2 0 145.9-62.9 145.9-147.8s-64.8-148.1-146-148.1z" />
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

          {/* About Section */}
        </div>
      </div>
    </>
  );
}
