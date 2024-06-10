


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
function Slider() {
  return (
    <div className="text-center z-0 mt-5">
    <Swiper
      navigation={true}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Autoplay, FreeMode, Pagination]}
       loop={true}
    //    autoplay={{ delay: 7000 }}
      spaceBetween={30}
      className="mySwiper"
    >
   
     <SwiperSlide className="relative">
     <div className=" h-[70vh] bg-cover bg-center" 
    style={{
        backgroundImage: 'linear-gradient(to right, #00000080, #54545480),url(https://i.ibb.co/Y3dkjvN/slider2.jpg)'
    }}>
    </div>
    <div className="absolute top-2/4 left-2/4  -translate-x-2/4 -translate-y-2/4 md:bottom-20  md:left-1/4 md:ml-5  text-center font-bold text-skyBlue-300 space-y-8">
    <div class="text-center md:text-left min-w-[300px] text-white">
  <h1 class="text-2xl  md:text-4xl font-bold mb-2">Join Our Medical Camp</h1>
  <p class="text-lg  mb-4">Your Health Matters - Quality Care for Everyone</p>
  <p class="text-md mb-6">Date: June 15-20, 2024 | Location: Downtown Community Center</p>
  <button class="bg-blue-500 border-2 text-white font-bold py-2 px-4 rounded-full uppercase   hover:bg-blue-600 transition-all">
    Donate Now
  </button>
</div>
    </div>
     </SwiperSlide>
     <SwiperSlide className="relative">
     <div className=" h-[70vh] bg-cover bg-center" 
    style={{
        backgroundImage: 'linear-gradient(to right, #00000080, #54545480),url(https://i.ibb.co/s3jz9dD/slider3.jpg)'
    }}>
    </div>
    <div className="absolute top-2/4 left-2/4  -translate-x-2/4 -translate-y-2/4 md:bottom-20  md:left-1/4 md:ml-5  text-center font-bold text-skyBlue-300 space-y-8">
    <div class="text-center md:text-left min-w-[300px] text-white">
  <h1 class="text-2xl  md:text-4xl font-bold mb-2">Join Our Medical Camp</h1>
  <p class="text-lg  mb-4">Your Health Matters - Quality Care for Everyone</p>
  <p class="text-md mb-6">Date: June 15-20, 2024 | Location: Downtown Community Center</p>
  <button class="bg-blue-500 border-2 text-white font-bold py-2 px-4 rounded-full uppercase   hover:bg-blue-600 transition-all">
    Donate Now
  </button>
</div>
    </div>
     </SwiperSlide>
     <SwiperSlide className="relative">
     <div className=" h-[70vh] bg-cover bg-center" 
    style={{
        backgroundImage: 'linear-gradient(to right, #00000080, #54545480),url(https://i.ibb.co/Csr7DcB/slider1.jpg)'
    }}>
    </div>
    <div className="absolute top-2/4 left-2/4  -translate-x-2/4 -translate-y-2/4 md:bottom-20  md:left-1/4 md:ml-5  text-center font-bold text-skyBlue-300 space-y-8">
    <div class="text-center md:text-left min-w-[300px] text-white">
  <h1 class="text-2xl  md:text-4xl font-bold mb-2">Join Our Medical Camp</h1>
  <p class="text-lg  mb-4">Your Health Matters - Quality Care for Everyone</p>
  <p class="text-md mb-6">Date: June 15-20, 2024 | Location: Downtown Community Center</p>
  <button class="bg-blue-500 border-2 text-white font-bold py-2 px-4 rounded-full uppercase   hover:bg-blue-600 transition-all">
    Donate Now
  </button>
</div>
    </div>
     </SwiperSlide>
     <SwiperSlide className="relative">
     <div className=" h-[70vh] bg-cover bg-center" 
    style={{
        backgroundImage: 'linear-gradient(to right, #00000080, #54545480),url(https://i.ibb.co/n88RvGT/slider4.jpg)'
    }}>
    </div>
    <div className="absolute top-2/4 left-2/4  -translate-x-2/4 -translate-y-2/4 md:bottom-20  md:left-1/4 md:ml-5  text-center font-bold text-skyBlue-300 space-y-8">
    <div class="text-center md:text-left min-w-[300px] text-white">
  <h1 class="text-2xl  md:text-4xl font-bold mb-2">Join Our Medical Camp</h1>
  <p class="text-lg  mb-4">Your Health Matters - Quality Care for Everyone</p>
  <p class="text-md mb-6">Date: June 15-20, 2024 | Location: Downtown Community Center</p>
  <button class="bg-blue-500 border-2 text-white font-bold py-2 px-4 rounded-full uppercase   hover:bg-blue-600 transition-all">
    Donate Now
  </button>
</div>
    </div>
     </SwiperSlide>
   
     
      
    </Swiper>
  </div>
  )
}



export default Slider
