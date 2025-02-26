import { assets } from "../assets/assets"

 

function Contact() {
  return (
    <div>

      <div className="text-center text-2xl pt-10 text-gray-500">
        <p className="">CONTACT <span className="text-gray-700 font-semibold">US</span></p>
      </div>

      <div className="flex flex-col justify-center my-10 md:flex-row gap-10 mb-28 text-sm">

        <img className="w-full md:max-w-[360px]" src={assets.contact_image} alt="" />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">Our OFFICE</p>
          <p className="text-gray-500">814 HLM GRAND YOFF <br /> Dakar, Sénégal</p>
          <p className="text-gray-500">Tel: +221 775931595 <br /> Email: terscorp1@gmail.com</p>
          <p className="font-semibold text-lg text-gray-600">Careers at TERRACARE</p>
          <p className="text-gray-500">Learn more about our teams and job openings</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
        </div>
      </div>
        
    </div>
  )
}

export default Contact