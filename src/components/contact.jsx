import person from "../assets/images/stand.svg";
export default function Contact() {
  return (
    <section id="contact">
      <div className="overflow-hidden bg-stone-100 py-24">
        <div className="mx-auto max-w-6xl px-10 lg:px-8">
          <h2 className="text-xl font-bold tracking-wide uppercase leading-10 text-gray-800 sm:text-xl">
            <span className="text-orange-600 "> /</span> Contact Me
          </h2>
          <h2 className="text-2xl font-bold tracking-wide leading-10 text-gray-800 sm:text-5xl mt-6">
            Get in touch
          </h2>

          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-6 md:gap-8 lg:gap-12">
              <div className="space-y-8 lg:space-y-16 mt-8">
                <div className="divide-y divide-gray-200 p-4 md:p-5 border border-gray-200 rounded-xl">
                  <div className=" flex gap-x-7 py-6">
                    <svg
                      className="flex-shrink-0 size-6 mt-1.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <div className="grow">
                      <h3 className="font-bold">Address</h3>
                      <address className="mt-1  not-italic">
                        Suite 108 Equity House, Cnr Jason Moyo and Rezende
                        <br />
                        Harare, Zimbabwe
                      </address>
                    </div>
                  </div>

                  <div className=" flex gap-x-7 py-6">
                    <svg
                      className="flex-shrink-0 size-5 mt-1.5"
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
                      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                    </svg>
                    <div className="grow">
                      <h3 className="font-bold">Contact me by email</h3>
                      <p className="mt-1 ">
                        If you have an inquiry feel free to email me
                      </p>
                      <a
                        className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800"
                        href="mailto:info@phillipchapita.com"
                      >
                        info@phillipchapita.com
                      </a>
                    </div>
                  </div>

                  <div className=" flex gap-x-7 py-6">
                    <svg
                      className="flex-shrink-0 size-6 mt-1.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m3 11 18-5v12L3 14v-3z" />
                      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                    </svg>{" "}
                    <div className="grow">
                      <h3 className="font-bold">Available for work</h3>
                      <p className="mt-1 ">
                        I am currently looking for new working opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aspect-w-16 aspect-h-6 lg:aspect-h-14 overflow-hidden bg-gray-100 rounded-2xl">
                <img
                  className="group-hover:scale-105 scale-x-[-1] transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                  src={person}
                  alt="Image Description"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
