export default function Footer(){
    return(
        <footer className="flex flex-col md:flex-row justify-between items-center p-8 px-[9%] bg-[#222831]">
  <div className="mb-4 md:mb-0">
    <p className="text-xl text-center md:text-left">Copyright &copy; 2024 by Sheeraz Jogi</p>
  </div>

  <div className="flex justify-center md:justify-end space-x-4">
    <a href="#" className="p-3 bg-[#00ADB5] outline outline-2 outline-[#00ADB5] rounded-full text-xl text-[#222831] hover:text-[#00ADB5] hover:bg-[#222831]">
      <i className="bx bxl-facebook"></i>
    </a>
    <a href="#" className="p-3 bg-[#00ADB5] outline outline-2 outline-[#00ADB5] rounded-full text-xl text-[#222831] hover:text-[#00ADB5] hover:bg-[#222831]">
      <i className="bx bxl-twitter"></i>
    </a>
    <a href="#" className="p-3 bg-[#00ADB5] outline outline-2 outline-[#00ADB5] rounded-full text-xl text-[#222831] hover:text-[#00ADB5] hover:bg-[#222831]">
      <i className="bx bxl-linkedin"></i>
    </a>
  </div>
</footer>
    )
}