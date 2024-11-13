export default function Contact(){
    return(
        <section className="min-h-screen py-8 px-[5%] border-b-2 border-[#00ADB5]" id="contact">
  <h2 className="text-4xl font-bold text-center mb-10">Contact <span className="text-[#00ADB5]">Me!</span></h2>

  <form className="max-w-[60rem] mx-auto text-center">
    <div className="flex flex-wrap justify-between gap-4">
      <div className="relative w-full md:w-[49%] my-2">
        <input type="text" placeholder="First Name" required className="w-full h-full p-4 text-lg text-white bg-transparent outline outline-2 outline-[#00ADB5] rounded-xl hover:bg-[#393E46] placeholder:text-white"/>
      </div>
      <div className="relative w-full md:w-[49%] my-2">
        <input type="text" placeholder="Last Name" required className="w-full h-full p-4 text-lg text-[#f0f4f8] bg-transparent outline outline-2 outline-[#00ADB5] rounded-xl hover:bg-[#393E46] placeholder:text-white"/>
      </div>
    </div>

    <div className="flex flex-wrap justify-between gap-4">
      <div className="relative w-full md:w-[49%] my-2">
        <input type="email" placeholder="Email" required className="w-full h-full p-4 text-lg text-[#f0f4f8] bg-transparent outline outline-2 outline-[#00ADB5] rounded-xl hover:bg-[#393E46] placeholder:text-white"/>
      </div>
      <div className="relative w-full md:w-[49%] my-2">
        <input type="text" placeholder="Email Subject" required className="w-full h-full p-4 text-lg text-[#f0f4f8] bg-transparent outline outline-2 outline-[#00ADB5] rounded-xl hover:bg-[#393E46] placeholder:text-white"/>
      </div>
    </div>

    <div className="flex flex-wrap justify-between gap-4">
      <div className="relative w-full md:w-[49%] my-2">
        <input type="number" placeholder="Mobile No." required className="w-full h-full p-4 text-lg text-[#f0f4f8] bg-transparent outline outline-2 outline-[#00ADB5] rounded-xl hover:bg-[#393E46] placeholder:text-white"/>
      </div>
      <div className="relative w-full md:w-[49%] my-2">
        <input type="text" placeholder="Address" required className="w-full h-full p-4 text-lg text-[#f0f4f8] bg-transparent outline outline-2 outline-[#00ADB5] rounded-xl hover:bg-[#393E46] placeholder:text-white"/>
      </div>
    </div>

    <div className="relative w-full my-2 mb-11 flex">
      <textarea name="" id="" placeholder="Your Message" required className="resize-none w-full h-full p-4 text-lg text-[#f0f4f8] bg-transparent outline outline-2 outline-[#00ADB5] rounded-xl hover:bg-[#393E46] placeholder:text-white"></textarea>
    </div>

    <div className="relative flex justify-center w-full h-[4rem] items-center cursor-pointer">
      <button type="submit" className="relative inline-flex justify-center items-center w-full md:w-[12rem] h-full bg-transparent outline outline-2 outline-[#00ADB5] rounded-[0.8rem] text-[1.2rem] font-semibold tracking-[0.1rem] text-[#00ADB5] hover:bg-[#00ADB5] hover:text-white">Submit</button>
    </div>
  </form>
</section>
    )
}