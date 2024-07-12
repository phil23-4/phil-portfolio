// src/components/About.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faCode } from '@fortawesome/free-solid-svg-icons';
import { faJava, faNodeJs, faPython } from "@fortawesome/free-brands-svg-icons";
import work from "../assets/images/work.svg";
import person from "../assets/images/person.svg";

const experience = [
  {
    date: 'Present',
    role: 'Web Developer',
    company: 'Ridge Brands',
    description: 'Created physical and prototype designs and functions for websites. Registered official online projects with search engines for optimized website traffic',
    tools: [
      {
        id: 0,
        name: "Java",
        icon: faJava,
      },
      {
        id: 1,
        name: "Node.js",
        icon: faNodeJs,
      },
      {
        id: 2,
        name: "Python",
        icon: faPython,
      }

    ]
  },
  {
    date: 'Jan - Dec 2023',
    role: 'Web Developer',
    company: 'Freelance',
    description: 'Created physical and prototype designs and functions for websites. Registered official online projects with search engines for optimized website traffic',
    tools: [
      {
        id: 0,
        name: "Java",
        icon: faJava,
      },
      {
        id: 1,
        name: "Node.js",
        icon: faNodeJs,
      },
      {
        id: 2,
        name: "Python",
        icon: faPython,
      }

    ]
  }
]
export default function About() {
  return (
    <section id='about'>
      <div className="overflow-hidden bg-stone-100 py-24 lg:pt-40">
        <div className="mx-auto max-w-6xl px-10 lg:px-8">
          <div className="mx-auto grid ma-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-xl font-bold tracking-wide leading-10 text-gray-800 sm:text-xl">
                <span className="text-orange-600"> /</span> About Me
              </h2>
              <h2 className="text-2xl font-bold tracking-wide leading-10 text-gray-800 sm:text-5xl mt-6">
                A bit about myself
              </h2>
              <p className="mt-6 text-base leading-8 text-pretty text-gray-600">
                👋 Hello! I&apos;m Phillip Francis Chapita, a passionate software developer from Zimbabwe with a knack for turning ideas into elegant code. My journey began with a Bachelor&apos;s degree in Computer Science, where I honed my programming skills and discovered my love for solving complex problems.
              </p>
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                  <p className="mt-6 text-base leading-8 text-gray-600">
                    📊 But that&apos;s not all—I also hold a Master&apos;s degree in Applied Statistics. Why? Because I believe that data holds the key to unlocking meaningful insights. Whether it&apos;s analyzing user behavior, optimizing algorithms, or predicting trends, I thrive on the intersection of code and data.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-2xl lg:mx-0 order-first lg:order-none">
              <img src={person} alt="" className="h-auto w-full scale-x-[-1]" />
            </div>
            <div className="mx-auto max-w-2xl lg:mx-0">
              <img src={work} alt="" className="h-auto w-full" />
            </div>
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Work Experience</h2>
              {/* <!-- Timeline --> */}
              <div className="mt-8">
                {/* <!-- Item --> */}
                {experience.map((exp) => (
                  <div key={exp.company} className="flex gap-x-3">
                    {/* <!-- Left Content --> */}
                    <div className="w-56 text-end">
                      <span className="text-xs font-medium text-gray-700">{exp.date}</span>
                    </div>
                    {/* <!-- End Left Content --> */}

                    {/* <!-- Icon --> */}
                    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                      <div className="relative z-10 size-7 flex justify-center items-center">
                        <div className="size-2 rounded-full bg-gray-400"></div>
                      </div>
                    </div>
                    {/* <!-- End Icon --> */}

                    {/* <!-- Right Content --> */}
                    <div className="grow pt-0.5 pb-8">
                      <h3 className="flex gap-x-1.5 font-semibold text-gray-800">
                        {exp.role} @ {exp.company}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        {exp.description}
                      </p>
                  
                      {exp.tools.map((tool) => (
                        <div key={tool.id} className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs  border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
                          <FontAwesomeIcon icon={tool.icon} className="flex-shrink-0 size-5  stroke-current text-slate-600"
                            fill="none" />
                          <span className="ml-0">{tool.name}</span>
                        </div>
                      ))}

                    </div>
                    {/* <!-- End Right Content --> */}
                  </div>
                ))}
                {/* <!-- End Item --> */}
              </div>
              {/* <!-- End Timeline --> */}
            </div>
          </div>
          {/* <hr className="h-px mt-44 bg-gray-700 border-0" /> */}
        </div>
      </div></section>
  );
}

