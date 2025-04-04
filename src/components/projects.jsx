import amasunday from "../assets/images/amasunday.webp";
import vision2030 from "../assets/images/vision.webp";

const projects = [
  {
    id: 1,
    name: "AMA Sunday Farmers Market",
    description:
      "The AMA SUNDAY Market is in the agribusiness industry and will be involved in the sale of a wide range of farm produce from farmers in Harare and around the country.",
    link: "https://ama-sundays-market.vercel.app/",
    image: amasunday,
    tools: ["HTML", "React", "Tailwind CSS", "Next.js"],
  },
  {
    id: 2,
    name: "Vision 2030 Movement",
    description:
      "Vision 2030 Movement is a society movement that was established by a group of youth motivated by the idea of becoming custodians of governance, accountability, youth empowerment and development within their country.",
    link: "https://vision2030-two.vercel.app/",
    image: vision2030,
    tools: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Vite"],
  },
];
export default function Projects() {
  return (
    <section id="projects">
      <div className="overflow-hidden bg-stone-50 py-24">
        <div className="mx-auto max-w-6xl px-10 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:pt-20">
            <h2 className="text-xl font-bold tracking-wide leading-10 text-gray-800 sm:text-xl">
              <span className="text-orange-600"> /</span> MY PROJECTS
            </h2>
            <h2 className="text-2xl font-bold tracking-wide leading-10 text-gray-800 sm:text-5xl mt-6">
              What I&apos;ve built.
            </h2>
          </div>
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative mt-12 min-h-[35vh] md:min-h-[75vh] border border-gray-200 rounded-xl"
              style={{
                background: `url(${project.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            >
              <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 ">
                Featured Project
              </span>
              <div className="absolute bottom-0 start-0 end-0 max-w-xs md:max-w-lg text-center mx-auto p-6 md:start-auto md:text-start md:mx-0">
                {/* <!-- Card --> */}
                <div className="px-5 py-4 inline-block bg-white rounded-lg md:p-7">
                  <div className="md:block">
                    <h3 className="text-base font-bold text-gray-800">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-gray-800 hidden md:block">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-6 hidden md:block flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl "
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="md:mt-8">
                    <a
                      className="group flex group-hover:scale-x-105 mt-8 items-center gap-2 text-sm font-medium text-gray-800 hover:text-gray-500"
                      href={project.link}
                      target="_blank"
                    >
                      Visit website
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
                  </div>
                </div>
                {/* <!-- End Card --> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
