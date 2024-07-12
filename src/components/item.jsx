<>
    <div className="carousel rounded-box mt-10 min-h-[35vh] md:min-h-[75vh]">
        <div id="item1" className="carousel-item w-full h-96">
            <img
                className="w-full"
                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                alt="Burger" />
        </div>
        <div id="item2" className="carousel-item w-full h-96 ">
            <img
                className="w-full"
                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                alt="Burger" />
        </div>
        <div id="item3" className="carousel-item w-full h-96">
            <img
                className="w-full"
                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                alt="Burger" />
        </div>
        <div id="item4" className="carousel-item w-full h-96">
            <img
                className="w-full"
                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                alt="Burger" />
        </div>
        <div id="item4" className="carousel-item w-full h-96">
            <img
                className="w-full"
                src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                alt="Burger" />
        </div>
        <div id="item5" className="carousel-item w-full h-96">
            <img
                className="w-full"
                src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                alt="Burger" />
        </div>
        <div id="item6" className="carousel-item w-full h-96">
            <img
                className="w-full"
                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                alt="Burger" />
        </div>
    </div>
    <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
        <a href="#item5" className="btn btn-xs">5</a>
        <a href="#item6" className="btn btn-xs">6</a>

    </div>
    {/* <!-- Features --> */}
    <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="min-h-[35vh] md:min-h-[75vh] bg-[url('/src/assets/images/work.svg')] bg-center bg-cover bg-no-repeat relative rounded-xl">
            <div className="absolute bottom-0 start-0 end-0 max-w-xs text-center mx-auto p-6 md:start-auto md:text-start md:mx-0">
                {/* <!-- Card --> */}
                <div className="px-5 py-4 inline-block bg-white rounded-lg md:p-7">
                    <div className="hidden md:block">
                        <h3 className="text-lg font-bold text-gray-800 sm:text-2xl">How does Preline work?</h3>
                        <p className="mt-2 text-gray-800">Learn more about Preline.</p>
                    </div>

                    <div className="md:mt-16">
                        <a className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-gray-500" href="#">
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                            Watch our story
                        </a>
                    </div>
                </div>
                {/* <!-- End Card --> */}
            </div>
        </div>
    </div>
    {/* <!-- End Features --> */}

     {/* <!-- Card Grid --> */}
     <div className="py-12 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">


{/* <!-- Card --> */}
<a className="group block" href="#">
    <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl">
        <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl" src={standing} alt="Image Description" />
    </div>

    <div className="pt-4">
        <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100">
            Nike React
        </h3>
        <p className="mt-1 text-gray-600">
            Rewriting sport's playbook for billions of athletes
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
            <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl">
                Brand Strategy
            </span>
            <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl">
                Visual Identity
            </span>
        </div>
    </div>
</a>
{/* <!-- End Card --> */}


</div>
{/* <!-- End Card Grid --> */}

</>