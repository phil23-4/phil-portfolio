// src/components/About.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJava,
  faCss3Alt,
  faNodeJs,
  faPython,
  faFigma,
  faKaggle,
  faReact,
  faHtml5,
  faJs,
  faCss3,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import work from "../assets/images/work.svg";
import person from "../assets/images/person.svg";
import standing from "../assets/images/standing.svg";

const experience = [
  {
    date: "July - Present",
    role: "Software Developer",
    company: "CETNOPH Enterprises",
    description:
      "Prototype, build, style, and ship high·quality websites, design systems, mobile apps, and cross platform digital experiences for a diverse array of clients using technologies such as JavaScript, React, CSS, Figma, and more",
    tools: [
      {
        id: 0,
        name: "React",
        icon: faReact,
      },
      {
        id: 1,
        name: "Figma",
        icon: faFigma,
      },
      {
        id: 2,
        name: "Javascript",
        icon: faJs,
      },
      {
        id: 3,
        name: "CSS",
        icon: faCss3Alt,
      },
    ],
  },
  {
    date: "Jan - June 2024",
    role: "Web Developer",
    company: "Freelancer",
    description:
      "Developed, maintained, and shipped production code for client websites using HTML, CSS, and React. Performed quality assurance tests on various sites to ensure cross browser compatibility and mobile responsiveness.",
    tools: [
      {
        id: 0,
        name: "HTML",
        icon: faHtml5,
      },
      {
        id: 1,
        name: "CSS",
        icon: faCss3Alt,
      },
      {
        id: 2,
        name: "React",
        icon: faReact,
      },
    ],
  },
  {
    date: "2021 - 2023",
    role: "Data Analyst",
    company: "Talk City (PVT) Ltd",
    description:
      "Conducted comprehensive data analysis on sales data to uncover trends, patterns, and insights. Built predictive models using Python and applied regression analysis to forecast sales demand, resulting in a 15% improvement in inventory management.",
    tools: [
      {
        id: 0,
        name: "Python",
        icon: faPython,
      },
      {
        id: 1,
        name: "Excel",
        icon: faMicrosoft,
      },
    ],
  },
];

const education = [
  {
    name: "MSc. Applied Statistics",
    date: "2018 - 2021",
    school: "Zhejiang University of Science and Technology (Hangzhou, China)",
  },
  {
    name: "BSc. Computer Science and Technology",
    date: "2014 - 2018",
    school: "Zhejiang University of Science and Technology (Hangzhou, China)",
  },
];
const skills = [
  {
    id: "0",
    name: "HTML",
    icon: faHtml5,
  },
  {
    id: "1",
    name: "CSS",
    icon: faCss3,
  },
  {
    id: "2",
    name: "Java",
    icon: faJava,
  },
  {
    id: "3",
    name: "Python",
    icon: faPython,
  },
  {
    id: "4",
    name: "Javascript",
    icon: faJs,
  },
  {
    id: "5",
    name: "Node.js",
    icon: faNodeJs,
  },
];
export default function About() {
  return (
    <section id="about">
      <div className="overflow-hidden bg-stone-100 py-24 lg:pt-40">
        <div className="mx-auto max-w-6xl px-10 lg:px-8">
          <h2 className="text-xl font-bold tracking-wide uppercase leading-10 text-gray-800 sm:text-xl">
            <span className="text-orange-600 "> /</span> About Me
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="basis-1/2 md:basis-2/4">
              <h2 className="text-2xl font-bold tracking-wide leading-10 text-gray-800 sm:text-5xl mt-6">
                A bit about myself
              </h2>
              <p className="mt-6 text-base leading-7 text-pretty text-gray-600">
                👋 Hello! I&apos;m Phillip Francis Chapita, a passionate
                software developer from Zimbabwe with a knack for turning ideas
                into elegant code. My journey began with a Bachelor&apos;s
                degree in Computer Science, where I honed my programming skills
                and discovered my love for solving complex problems.
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                📊 But that&apos;s not all—I also hold a Master&apos;s degree in
                Applied Statistics. Why? Because I believe that data holds the
                key to unlocking meaningful insights. Whether it&apos;s
                analyzing user behavior, optimizing algorithms, or predicting
                trends, I thrive on the intersection of code and data.
              </p>
            </div>
            <div className="basis-1/2 md:basis-1/3">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <img
                  src={person}
                  alt=""
                  className="h-auto w-full scale-x-[-1]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="basis-full md:basis-1/2 order-3 md:order-none">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <img
                  src={standing}
                  alt=""
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>

            <div className="basis-full md:basis-1/2">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Work Experience
                </h2>
                {/* <!-- Timeline --> */}
                <div className="mt-8">
                  {/* <!-- Item --> */}
                  {experience.map((exp) => (
                    <div key={exp.company} className="flex gap-x-4">
                      {/* <!-- Left Content --> */}
                      <div className="w-1/4 text-end">
                        <span className="text-xs font-semibold text-gray-700">
                          {exp.date}
                        </span>
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
                      <div className="grow pt-0.5 pb-8 w-3/4">
                        <h3 className="flex gap-x-1.5 font-bold text-gray-800">
                          {exp.role} @ {exp.company}
                        </h3>
                        <p className="mt-1 text-gray-600 leading-6 text-balance">
                          {exp.description}
                        </p>

                        {exp.tools.map((tool) => (
                          <div
                            key={tool.id}
                            className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-sm  border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                          >
                            <FontAwesomeIcon
                              icon={tool.icon}
                              className="flex-shrink-0 size-5  stroke-current text-slate-600"
                              fill="none"
                            />
                            <span className="ml-0">{tool.name}</span>
                          </div>
                        ))}
                      </div>
                      {/* <!-- End Right Content --> */}
                    </div>
                  ))}
                  <a
                    className="group flex group-hover:scale-x-105 mt-8 items-center gap-2 text-sm font-medium text-gray-800 hover:text-gray-500"
                    href="/resume.pdf"
                    target="_blank"
                  >
                    View Full Resume
                    <svg
                      className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  {/* <!-- End Item --> */}
                </div>
                {/* <!-- End Timeline --> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="basis-full md:basis-1/2">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Education History
                </h2>
                {/* <!-- Timeline --> */}
                <div className="mt-8">
                  {/* <!-- Item --> */}
                  {education.map((edu) => (
                    <div key={edu.name} className="flex gap-x-3">
                      {/* <!-- Left Content --> */}
                      <div className="text-start">
                        <span className="text-xs font-semibold text-gray-700">
                          {edu.date}
                        </span>
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
                        <h3 className="flex gap-x-1.5 font-bold text-gray-800">
                          {edu.name}
                        </h3>
                        <h2 className="flex gap-x-1.5 text-sm text-gray-800">
                          {edu.school}
                        </h2>
                      </div>
                      {/* <!-- End Right Content --> */}
                    </div>
                  ))}
                  <a
                    className="group flex group-hover:scale-x-105 mt-8 items-center gap-2 text-sm font-medium text-gray-800 hover:text-gray-500"
                    href="/resume.pdf"
                    target="_blank"
                  >
                    View Full Resume
                    <svg
                      className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  {/* <!-- End Item --> */}
                </div>
                {/* <!-- End Timeline --> */}
              </div>
            </div>
            <div className="basis-full md:basis-1/2 order-3 md:order-none">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <img
                  src={work}
                  alt=""
                  className="h-auto w-full object-contain scale-x-[-1]"
                />
              </div>
            </div>
          </div>

          <>
            <h2 className="mt-16 text-2xl py-12 font-bold tracking-tight text-gray-900">
              Technical Skills
            </h2>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className=" flex flex-col justify-center border rounded-lg text-center p-4 md:p-5 md:hover:scale-105"
                >
                  <div className="flex justify-center items-center size-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto">
                    <FontAwesomeIcon
                      icon={skill.icon}
                      className="flex-shrink-0 size-7 text-white"
                    />
                  </div>

                  <div className="mt-3">
                    <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </>
        </div>
      </div>
    </section>
  );
}
