import Image from "next/image";
import profile from "@/app/image/sheeraz.jpg"

export default function HomeSection(){
    return(
        <section id="home" className="min-h-screen pt-24 pb-8 px-5 flex flex-col md:flex-row items-center gap-5">
  {/* Text Section */}
  <div className="max-w-4xl text-center md:text-left relative">
    <h1 className="text-4xl md:text-5xl font-bold">
      Hi, I&rsquo;m <span className="text-[#00ADB5]">Sheeraz Ahmed</span>
    </h1>
    <div className="relative w-full md:w-80 mx-auto md:mx-0">
      <h3 className="text-3xl font-bold text-[#00ADB5]">Frontend Developer</h3>
    </div>
    <p className="text-lg text-justify mx-auto md:mx-0 md:text-base mt-4">
      Highly skilled Frontend Developer with 1 year of experience in designing and developing responsive, user-friendly web applications using HTML, CSS, JavaScript, and modern frontend frameworks.
    </p>
    
    <div className="flex flex-col sm:flex-row gap-4 mt-5 w-full justify-center sm:justify-start">
      <a href="https://github.com/Sheerazjogi" className="inline-flex items-center justify-center w-full sm:w-48 h-16 bg-[#00ADB5] outline outline-2 outline-[#00ADB5] rounded-lg text-xl font-semibold text-white hover:bg-[#222831] transition-all">
        Connect Me
      </a>
      <a href="#" className="inline-flex items-center justify-center w-full sm:w-48 h-16 bg-transparent outline outline-2 outline-[#00ADB5] rounded-lg text-xl font-semibold text-[#00ADB5] hover:bg-[#00ADB5] hover:text-white transition-all">
        Hire Me
      </a>
    </div>

    {/* Social Icons */}
    <div className="flex flex-row gap-4 mt-5 justify-center sm:justify-start w-full">
  <a href="https://github.com/Sheerazjogi" className="w-10 h-10 outline outline-2 outline-[#00ADB5] rounded-tl-xl rounded-br-xl text-2xl text-[#00ADB5] hover:text-white transition-all flex items-center justify-center">
    <i className="bx bxl-github"></i>
  </a>
  <a href="https://www.linkedin.com/in/sheeraz-ahmed-64a1a4221" className="w-10 h-10 outline outline-2 outline-[#00ADB5] rounded-tl-xl rounded-br-xl text-2xl text-[#00ADB5] hover:text-white transition-all flex items-center justify-center">
    <i className="bx bxl-linkedin"></i>
  </a>
  <a href="https://www.facebook.com" className="w-10 h-10 outline outline-2 outline-[#00ADB5] rounded-tl-xl rounded-br-xl text-2xl text-[#00ADB5] hover:text-white transition-all flex items-center justify-center">
    <i className="bx bxl-facebook"></i>
  </a>
</div>

  </div>

  {/* Image Section */}
  <div className="w-64 h-64 mt-5 md:mt-0 flex bg-cover bg-center rounded-full outline outline-[#00ADB5] hover:bg-[#00ADB5] hover:opacity-30 shadow-xl transform hover:scale-105 mx-auto md:mx-0 overflow-hidden">
    <Image
      src={profile}
      alt="sheeraz Ahmed"
      width={256}
      height={256}
    />
  </div>
</section>
    )
}