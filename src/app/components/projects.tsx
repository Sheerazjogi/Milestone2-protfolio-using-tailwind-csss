import Image from "next/image";
import half1 from "@/app/image/half blog.png"
import half2 from "@/app/image/half resume.png"
export default function Projects(){
    return(
        <section className="min-h-screen py-8 px-[5%] border-b-2 border-[#00ADB5]" id="projects">
        <div className="py-5 text-center">
          <h2 className="text-[2.25rem] font-bold mt-[60px]">My <span className="text-[#00ADB5]">Projects</span></h2>
      
          
            {/* Project 2 */}
            <div className="border-2 border-[#00ADB5] rounded-lg overflow-hidden relative hover:scale-105 transition duration-300">
              <Image src={half1} alt="project2" className="w-full h-[400px] rounded-lg object-cover transform transition duration-500"/>
              <h3 className="text-[#00ADB5] text-lg font-semibold">Blogging Website</h3>
              <p className="text-gray-300 mt-3">
                I&rsquo;m thrilled to showcase my latest project - a blogging website that showcases my skills in web development. I aimed to create an exceptional user experience.
              </p>
              <button className="mt-5 px-4 py-2 bg-[#00ADB5] text-white font-semibold rounded hover:bg-[#222831] hover:text-[#00ADB5] transition duration-300 hover:outline-2 hover:outline-[#00ADB5] hover:outline">
                <a href="https://cards-blogs-responsive-website-4-5assigment.vercel.app//" target="_blank">View Project</a>
              </button>
            </div>
      
            {/* Project 3 */}
            <div className="border-2 border-[#00ADB5] rounded-lg overflow-hidden relative hover:scale-105 transition duration-300">
              <Image src={half2} alt="project3" className="w-full h-[400px] rounded-lg object-cover transform transition duration-500"/>
              <h3 className="text-[#00ADB5] text-lg font-semibold">Resume Builder</h3>
              <p className="text-gray-300 mt-3">
                A fully functional and customizable Resume Builder! This project spanned 5 major milestones, each offering new challenges and growth opportunities.
              </p>
              <button className="mt-5 px-4 py-2 bg-[#00ADB5] text-white font-semibold rounded hover:bg-[#222831] hover:text-[#00ADB5] hover:outline-2 hover:outline-[#00ADB5] hover:outline transition duration-300">
                <a href="https://resume-builder-hackthon-giaic-rlup.vercel.app/" target="_blank">View Project</a>
              </button>
            </div>
          </div>
      </section>
    )
}