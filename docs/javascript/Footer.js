const footer = document.getElementById('footer')
footer.innerHTML = `
    <footer class="w-full py-14">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto">
                <a data-aos="zoom-in" href="/index.html" class="flex justify-center ">
                    <img src="./docs/assets/logo.png" class="md:h-32 h-20" alt="">
                </a>
                <ul data-aos="fade-up" 
                    class="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b border-gray-200">
                    <li><a href="index.html"
                            class="text-gray-800 hover:text-[#3da1b9] transition-all duration-500">Home</a></li>
                    <li><a href="#about"
                            class=" text-gray-800 hover:text-[#3da1b9] transition-all duration-500">About</a></li>
                    <li><a href="#services"
                            class=" text-gray-800 hover:text-[#3da1b9] transition-all duration-500">Services</a></li>
                    <li><a href="#team" class=" text-gray-800 hover:text-[#3da1b9] transition-all duration-500">Team</a>
                    </li>
                    <li><a href="#testimonials"
                            class=" text-gray-800 hover:text-[#3da1b9] transition-all duration-500">Testimonials</a>
                    </li>
                    <li><a href="#howitwork" class=" text-gray-800 hover:text-[#3da1b9] transition-all duration-500">How
                            It Work</a></li>
                </ul>
                <span class="text-lg text-gray-500 text-center block">©<a href="/index.html"
                        class="hover:underline">newstone</a> 2025,
                    All rights reserved.</span>
            </div>
        </div>
    </footer>
`

const year = new Date().getFullYear()
const copyright = document.getElementById('copyright').innerHTML = year