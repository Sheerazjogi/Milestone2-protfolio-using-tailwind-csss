export default function Education(){
    return(
        
    <section className="min-h-screen py-8 px-[5%] border-b-2 border-[#00ADB5]" id="education">
    <h2 className="text-[3.5rem] mt-[2.2rem] text-center">My <span className="text-[#00ADB5]">Journey</span></h2>
    
    <div className="flex flex-wrap gap-[2rem] mt-[20px] justify-center">
      {/* Education Column */}
      <div className="flex flex-col w-full sm:w-[550px]">
        <h3 className="text-[2rem] mb-[1.5rem] ml-[2rem]">Education</h3>
        
        {/* MSIT Degree */}
        <div className="relative pl-[2rem]">
          <div className="relative p-[1.5rem] outline outline-2 outline-[#00ADB5] rounded-lg mb-[2rem] hover:bg-[#393E46] transition duration-300">
            <div className="text-[1.5rem] text-[#00ADB5] pb-[0.5rem] flex items-center">
              <i className="bx bxs-calendar pr-[0.5rem]"></i>2021 - 2023
            </div>
            <h3 className="text-[1.3rem] text-[#00ADB5]">MSIT Degree - Sindh Agriculture University, Tandojam</h3>
            <p className="text-[1.1rem] pt-[0.5rem]">
              This study aimed to develop a machine learning model for analyzing Amazon product reviews, focusing on classifying reviews as positive, negative, or neutral.
            </p>
          </div>
        </div>
  
        {/* BSIT Degree */}
        <div className="relative pl-[2rem]">
          <div className="relative p-[1.5rem] outline outline-2 outline-[#00ADB5] rounded-lg mb-[2rem] hover:bg-[#393E46] transition duration-300">
            <div className="text-[1.5rem] text-[#00ADB5] pb-[0.5rem] flex items-center">
              <i className="bx bxs-calendar pr-[0.5rem]"></i>2017 - 2021
            </div>
            <h3 className="text-[1.3rem] text-[#00ADB5]">BSIT Degree - Sindh Agriculture University, Tandojam</h3>
            <p className="text-[1.1rem] pt-[0.5rem]">
              The project focused on developing a motor vehicle detection and tracking system using a desktop app and an Android app with a GPS module.
            </p>
          </div>
        </div>
  
        {/* HSC */}
        <div className="relative pl-[2rem]">
          <div className="relative p-[1.5rem] outline outline-2 outline-[#00ADB5] rounded-lg mb-[2rem] hover:bg-[#393E46] transition duration-300">
            <div className="text-[1.5rem] text-[#00ADB5] pb-[0.5rem] flex items-center">
              <i className="bx bxs-calendar pr-[0.5rem]"></i>2014 - 2017
            </div>
            <h3 className="text-[1.3rem] text-[#00ADB5]">HSC - Govt. Nazerathe Girls College, Hyderabad</h3>
            <p className="text-[1.1rem] pt-[0.5rem]">
              Developed strong problem-solving skills, logical reasoning, and a passion for technology during my studies.
            </p>
          </div>
        </div>
      </div>
  
      {/* Experience Column */}
      <div className="flex flex-col w-full sm:w-[550px]">
        <h3 className="text-[2rem] mb-[1.5rem] ml-[2rem]">Experience</h3>
  
        {/* Computer Lab Assistant */}
        <div className="relative pl-[2rem]">
          <div className="relative p-[1.5rem] outline outline-2 outline-[#00ADB5] rounded-lg mb-[2rem] hover:bg-[#393E46] transition duration-300">
            <div className="text-[1.5rem] text-[#00ADB5] pb-[0.5rem] flex items-center">
              <i className="bx bxs-calendar pr-[0.5rem]"></i>09-2023 - Continue
            </div>
            <h3 className="text-[1.3rem] text-[#00ADB5]">Computer Lab Assistant - Quaid-e-Azam Rangers School & College, Hyderabad</h3>
            <p className="text-[1.1rem] pt-[0.5rem]">
              Assist students, faculty, and staff in computer labs, providing technical support, maintaining lab equipment, and ensuring a productive learning environment.
            </p>
          </div>
        </div>
  
        {/* Accountant */}
        <div className="relative pl-[2rem]">
          <div className="relative p-[1.5rem] outline outline-2 outline-[#00ADB5] rounded-lg mb-[2rem] hover:bg-[#393E46] transition duration-300">
            <div className="text-[1.5rem] text-[#00ADB5] pb-[0.5rem] flex items-center">
              <i className="bx bxs-calendar pr-[0.5rem]"></i>05-2023 - 09-2023
            </div>
            <h3 className="text-[1.3rem] text-[#00ADB5]">Accountant - Mother’s Lap School System, Hyderabad</h3>
            <p className="text-[1.1rem] pt-[0.5rem]">
              Managed financial transactions, prepared statements, and ensured compliance with accounting standards.
            </p>
          </div>
        </div>
  
        {/* Computer and Math Teacher */}
        <div className="relative pl-[2rem]">
          <div className="relative p-[1.5rem] outline outline-2 outline-[#00ADB5] rounded-lg mb-[2rem] hover:bg-[#393E46] transition duration-300">
            <div className="text-[1.5rem] text-[#00ADB5] pb-[0.5rem] flex items-center">
              <i className="bx bxs-calendar pr-[0.5rem]"></i>11-2021 - 12-2022
            </div>
            <h3 className="text-[1.3rem] text-[#00ADB5]">Computer and Math Teacher - Discovery School System, Tandojam</h3>
            <p className="text-[1.1rem] pt-[0.5rem]">
              Contributed to the education of students by teaching Computer Science and Mathematics.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}