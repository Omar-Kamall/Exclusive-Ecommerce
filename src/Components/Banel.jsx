import { Img1 , Img9 } from "../../public/assets";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../Pages/styles.css';
// import required modules
import { Pagination , Autoplay } from 'swiper/modules';

const Banel = () => {
    return (
        <section className="container mx-auto! px-[5%]! grid grid-cols-1 lg:grid-cols-[1fr_4fr] gap-10 mb-15!">
            <div className="text-[17px] font-semibold border-r-1 border-gray-300 pt-6! hidden lg:flex flex-col gap-4">
                <h6>Woman's Fashion</h6>
                <h6>Men's Fashion</h6>
                <h6>Electronics</h6>
                <h6>Home & Lifestyle</h6>
                <h6>Medicine</h6>
                <h6>Sports & Outdoor</h6>
                <h6>Baby's & Toys</h6>
                <h6>Groceries & Pets</h6>
                <h6>Health & Beauty</h6>
            </div>
            <Swiper pagination={true}
                autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                }}
                loop={true}
                modules={[Pagination , Autoplay]} className="pt-5!">
                <SwiperSlide className="bg-black flex items-center justify-around py-5!">
                    <div className="text-white flex flex-col gap-1 md:gap-5 ml-5!">
                        <div className="flex items-center gap-3">
                            <img src={Img1} alt="Image-Error" />
                            <span className="text-[12px] text-center md:text-2xl">iPhone 14 Series</span>
                        </div>
                        <h2 className="text-[18px] text-start md:text-5xl font-semibold">Up to 10%<br/>off Voucher</h2>
                        <div className="text-start cursor-pointer">
                            <span className="flex items-center gap-3">Shop Now <FaArrowRightLong size={17}/></span>
                            <div className="h-[1px] w-17 bg-white"></div>
                        </div>
                    </div>
                    <img className="w-40 sm:w-70 md:w-95" src={Img9} alt="Image-Error" />
                </SwiperSlide>
                <SwiperSlide className="bg-black flex items-center justify-around py-5!">
                    <div className="text-white flex flex-col gap-1 md:gap-5 ml-5!">
                        <div className="flex items-center gap-3">
                            <img src={Img1} alt="Image-Error" />
                            <span className="text-[12px] text-center md:text-2xl">iPhone 14 Series</span>
                        </div>
                        <h2 className="text-[18px] text-start md:text-5xl font-semibold">Up to 10%<br/>off Voucher</h2>
                        <div className="text-start cursor-pointer">
                            <span className="flex items-center gap-3">Shop Now <FaArrowRightLong size={17}/></span>
                            <div className="h-[1px] w-17 bg-white"></div>
                        </div>
                    </div>
                    <img className="w-40 sm:w-70 md:w-95" src={Img9} alt="Image-Error" />
                </SwiperSlide>
                <SwiperSlide className="bg-black flex items-center justify-around py-5!">
                    <div className="text-white flex flex-col gap-1 md:gap-5 ml-5!">
                        <div className="flex items-center gap-3">
                            <img src={Img1} alt="Image-Error" />
                            <span className="text-[12px] text-center md:text-2xl">iPhone 14 Series</span>
                        </div>
                        <h2 className="text-[18px] text-start md:text-5xl font-semibold">Up to 10%<br/>off Voucher</h2>
                        <div className="text-start cursor-pointer">
                            <span className="flex items-center gap-3">Shop Now <FaArrowRightLong size={17}/></span>
                            <div className="h-[1px] w-17 bg-white"></div>
                        </div>
                    </div>
                    <img className="w-40 sm:w-70 md:w-95" src={Img9} alt="Image-Error" />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Banel