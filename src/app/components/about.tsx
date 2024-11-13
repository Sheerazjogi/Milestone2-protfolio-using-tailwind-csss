import Image from "next/image";
import profile from "@/app/image/mahnoor.jpg"

export default function About(){
    return(
        <section className="flex flex-col items-center gap-[0.9rem] pb-[1.5rem] bg-[#222831]" id="about">
  <h2 className="text-[3.5rem] mt-[2.2rem] text-center">About <span className="text-[#00ADB5]">Me</span></h2>

  <div className="relative w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] rounded-full flex justify-center items-center overflow-hidden">
    <Image src={profile} alt="Profile Picture" className="w-full h-full object-cover rounded-full outline outline-2 outline-[#00ADB5]" />
  </div>

  <div className="text-center mt-5">
    <h3 className="text-[2rem] text-[#00ADB5]">Know Who Am I?</h3>
    <p className="text-[1.2rem] my-[1rem] mx-auto w-[80%] sm:w-[70%] md:w-[60%]">
      I am Mahnoor, an IT Professional with a Master's degree in Information
      Technology from Sindh Agriculture University, Tandojam. Now, I'm
      studying an advanced course in Web 3.0, Metaverse, and GenAI at the Governor
      House. I create websites that are easy to use, look great, and work
      well on all devices. Let's work together to create something amazing!
    </p>

    <div className="flex justify-center w-full">
      <a href="#" className="inline-flex justify-center items-center w-[12rem] h-[4rem] bg-[#00ADB5] font-semibold rounded-[0.8rem] text-[1.2rem] hover:bg-[#222831] hover:text-white transition-all outline outline-2 outline-[#00ADB5] rounded-tl-[15px] rounded-br-[15px] text-white">
        Read Me
      </a>
    </div>
  </div>
</section>
    )
}