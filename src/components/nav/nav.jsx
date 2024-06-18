export default function Nav() {
  return (
    <header className="relative z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900">
      <nav
        aria-label="Global"
        className="mx-auto max-w-container px-4 sm:px-6 lg:px-8"
      >
        <div className="relative flex items-center py-[2.125rem]">
          <a className="flex-none text-slate-900" href="/">
            <span className="sr-only">Phillip Chapita Portfolio</span>
            <p className="h-5 w-auto lg:text-4xl font-amsterdam">Phillip Chapita</p>
          </a>
          
          <div className="ml-auto hidden lg:flex lg:items-center">
            <a href="#">About</a>
            <a className="ml-8" href="/templates">
              Projects
            </a>
            <a className="ml-8" href="/documentation">
              Contact
            </a>
          </div>
        
          {/* <button
            type="button"
            className="-my-1 -mr-1 ml-6 flex h-8 w-8 items-center justify-center lg:hidden"
          >
            <span className="sr-only">Open navigation</span>
            <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-slate-900">
              <path
                d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </svg>
          </button> */}
          <div className="hidden lg:ml-8 lg:flex lg:items-center lg:border-l lg:border-slate-900/15 lg:pl-8">
            <a href="/login">Hire Me</a>
            <a
              className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 -my-2.5 ml-8"
              href="/all-access"
            >
              <span>
                Download CV <span aria-hidden="true">→</span>
              </span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
