import { lazy } from "react"
const About = lazy(() => import ("../Components/about"))
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
// import required modules
import { Pagination , Autoplay, Navigation } from 'swiper/modules';
import { Img1, Img10, Img3, Img4, Img5, Img6, Img9 } from "../../public/assets";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosPhonePortrait, IoIosStar } from "react-icons/io";
import { IoCameraOutline, IoStarHalfOutline } from "react-icons/io5";
import { FaCartPlus, FaHeart, FaShare } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { CiHeadphones } from "react-icons/ci";
import { SiYoutubegaming } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, AddToFavourite } from "../Redux/appSlice";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch();
    const products = useLoaderData();
    const color_favourait = useSelector((state) => state.AppReducer.color_favourait);
    const color_cart = useSelector((state) => state.AppReducer.color_cart);
    return (
        <section className='pt-15! pb-20! loading'>
            <div className="container mx-auto! px-[5%]! grid grid-cols-1 lg:grid-cols-[1fr_4fr] gap-10 mb-15!">
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
            </div>
            <div className="container mx-auto! px-[5%]! my-20!">
                <div className="flex items-center gap-3">
                    <div className="bg-red-500 w-5 h-12 rounded"></div>
                    <span className="text-red-500">Today's</span>
                </div>
                <div className="flex justify-between my-7!">
                    <span className="md:text-3xl text-[20px] font-bold">Flash Sales</span>
                    <div className="flex gap-10">
                        <button className="swiper-button-prev rounded"></button>
                        <button className="swiper-button-next rounded"></button>
                    </div>
                </div>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        740: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1068: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        1450: {
                            slidesPerView: 6,
                            spaceBetween: 40,
                        },
                    }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    modules={[Pagination , Navigation , Autoplay]}
                    className="mySwiper"
                >
                    {products.map(item => (
                        <SwiperSlide key={item.id} className="border-2 border-gray-300 flex flex-col items-center gap-1 py-5! px-10! rounded-2xl">
                            <div className="relative">
                                <img className="w-full h-30" src={item.image} alt="Image-Error" loading="lazy" />
                                <span className="bg-red-500 text-white px-2! absolute top-[-10px] left-[-30px] rounded">{item.id}%</span>
                                <div className="flex flex-col gap-3 absolute top-0 right-[-33px]">
                                    <FaHeart onClick={() => dispatch(AddToFavourite({
                                        id: item.id,
                                        image: item.image,
                                        title: item.title,
                                        price: item.price,
                                        quantity: 1,
                                    }))}
                                        size={32} className={`cursor-pointer bg-gray-200 p-2! ${color_favourait[item.id] && "text-red-500"} transition duration-300 rounded-full`}/>
                                    <FaCartPlus onClick={() => dispatch(AddToCart({
                                        id: item.id,
                                        image: item.image,
                                        title: item.title,
                                        rating: item.rating,
                                        price: item.price,
                                        quantity: 1,
                                    }))} size={32} className={`cursor-pointer bg-gray-200 p-2! ${color_cart[item.id] && "text-green-500"} transition duration-300 rounded-full`}/>
                                </div>
                            </div>
                            <h5 className="text-[15px] mt-2! font-mono line-clamp">{item.title}</h5>
                            <div className="flex items-center justify-between gap-5">
                                <div className="flex gap-3">
                                    <span className="text-red-500 font-mono">${(item.price-(item.price*(item.id/100))).toFixed(2)}</span>
                                    <del className="text-[rgba(3,3,3,0.3)] font-mono">${(item.price).toFixed(2)}</del>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 font-mono">
                                <span className="flex gap-[3px]">
                                    <IoIosStar className="text-amber-500"/>
                                    <IoIosStar className="text-amber-500"/>
                                    <IoIosStar className="text-amber-500"/>
                                    <IoStarHalfOutline className="text-amber-500"/>
                                </span>
                                <span className="text-gray-500">({item.rating.count-1})</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="container mx-auto! px-[5%]! my-20!">
                <div className="flex items-center gap-3">
                    <div className="bg-red-500 w-5 h-12 rounded"></div>
                    <span className="text-red-500">Categories</span>
                </div>
                <div className="flex items-center justify-between my-7!">
                    <span className="md:text-3xl text-[20px] font-bold">Browse By Category</span>
                    <button className="bg-red-500 text-white px-5! py-2! cursor-pointer hover:bg-red-700 transition duration-300 rounded">View All</button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                    <div className="flex flex-col items-center justify-center gap-2 hover:text-white hover:bg-red-500 border-2 border-gray-300 py-8! transition duration-400 cursor-pointer rounded">
                        <IoIosPhonePortrait size={35} />
                        <span className="font-mono">Phones</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 hover:text-white hover:bg-red-500 border-2 border-gray-300 py-8! transition duration-400 cursor-pointer rounded">
                        <HiOutlineDesktopComputer size={35} />
                        <span className="font-mono">Computers</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 hover:text-white hover:bg-red-500 border-2 border-gray-300 py-8! transition duration-400 cursor-pointer rounded">
                        <BsSmartwatch size={35} />
                        <span className="font-mono">SmartWatch</span>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-red-500 gap-2 border-2 border-gray-300 py-8! cursor-pointer rounded">
                        <IoCameraOutline size={35} color="white"/>
                        <span className="font-mono text-white">Camera</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 hover:text-white hover:bg-red-500 border-2 border-gray-300 py-8! transition duration-400 cursor-pointer rounded">
                        <CiHeadphones size={35} />
                        <span className="font-mono">HeadPhones</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 hover:text-white hover:bg-red-500 border-2 border-gray-300 py-8! transition duration-400 cursor-pointer rounded">
                        <SiYoutubegaming size={35} />
                        <span className="font-mono">Gaming</span>
                    </div>
                </div>
            </div>
            <div className="container mx-auto! px-[5%]! my-20!">
                <div className="flex items-center gap-3">
                    <div className="bg-red-500 w-5 h-12 rounded"></div>
                    <span className="text-red-500">This Month</span>
                </div>
                <div className="flex items-center justify-between my-7!">
                    <span className="md:text-3xl text-[20px] font-bold">Best Selling Products</span>
                    <button className="bg-red-500 text-white px-5! py-2! cursor-pointer hover:bg-red-700 transition duration-300 rounded">View All</button>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                    {products.slice(4, 8).map(item => (
                            <div key={item.id} className="border-2 border-gray-300 flex flex-col items-center gap-1 p-5! rounded-2xl">
                                <div>
                                    <img className="w-full h-30" src={item.image} alt="Image-Error" loading="lazy" />
                                </div>
                                <h5 className="text-[15px] mt-2! font-mono line-clamp">{item.title}</h5>
                                <div className="flex items-center justify-between gap-5">
                                    <span className="text-red-500 font-mono">${item.price}</span>
                                    <div className="flex gap-2">
                                        <FaHeart onClick={() => dispatch(AddToFavourite({
                                        id: item.id,
                                        image: item.image,
                                        title: item.title,
                                        price: item.price,
                                        quantity: 1,
                                    }))} size={20} className={`cursor-pointer ${color_favourait[item.id] && "text-red-500"} transition duration-300 rounded-full`}/>
                                        <FaCartPlus onClick={() => dispatch(AddToCart({
                                            id: item.id,
                                            image: item.image,
                                            title: item.title,
                                            rating: item.rating,
                                            price: item.price,
                                            quantity: 1,
                                        }))} size={20} className={`cursor-pointer ${color_cart[item.id] && "text-green-500"} transition duration-300 rounded-full`}/>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 font-mono">
                                    <span className="flex gap-[3px]">
                                        <IoIosStar className="text-amber-500"/>
                                        <IoIosStar className="text-amber-500"/>
                                        <IoIosStar className="text-amber-500"/>
                                        <IoStarHalfOutline className="text-amber-500"/>
                                    </span>
                                    <span className="text-gray-500">({item.rating.count})</span>
                                </div>
                            </div>
                    ))}
                </div>
            </div>
            <div className="container mx-auto! px-[5%]! my-20!">
                <div className="bg-black grid grid-cols-1 px-[5%]! md:grid-cols-2 py-15! gap-5">
                    <div className="flex flex-col items-center justify-center gap-5">
                        <div>
                            <h6 className="text-green-500">Categories</h6>
                            <h5 className="text-white font-semibold text-4xl lg:text-[45px] mt-5!">Enhance Your<br/> Music Experience</h5>
                            <div className="flex gap-5 mt-5!">
                                <div className="flex flex-col items-center p-3! bg-white rounded-full">
                                    <span className="font-bold text-[13px]">23</span>
                                    <span className="font-bold text-[13px]">Hours</span>
                                </div>
                                <div className="flex flex-col items-center py-3! px-4! bg-white rounded-full">
                                    <span className="font-bold text-[13px]">05</span>
                                    <span className="font-bold text-[13px]">Days</span>
                                </div>
                                <div className="flex flex-col items-center p-3! bg-white rounded-full">
                                    <span className="font-bold text-[13px]">59</span>
                                    <span className="font-bold text-[10px]">Minutes</span>
                                </div>
                                <div className="flex flex-col items-center p-3! bg-white rounded-full">
                                    <span className="font-bold text-[13px]">35</span>
                                    <span className="font-bold text-[10px]">Seconds</span>
                                </div>
                            </div>
                            <button className="bg-green-500 text-white mt-5! text-start px-10! py-3! hover:bg-green-700 transition duration-300 cursor-pointer rounded">Buy Now</button>
                        </div>
                    </div>
                    <img className="gradient rounded-4xl" src={Img10} alt="Image-Error" loading="lazy" />
                </div>
            </div>
            <div className="container mx-auto! px-[5%]! my-20!">
                <div className="flex items-center gap-3">
                    <div className="bg-red-500 w-5 h-12 rounded"></div>
                    <span className="text-red-500">Our Products</span>
                </div>
                <div className="flex items-center justify-between my-7!">
                    <span className="md:text-3xl text-[20px] font-bold">Explore Our Products</span>
                    <button className="bg-red-500 text-white px-5! py-2! cursor-pointer hover:bg-red-700 transition duration-300 rounded">View All</button>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                    {products.slice(8, 16).map(item => (
                        <div key={item.id} className="border-2 border-gray-300 flex flex-col items-center gap-1 p-5! rounded-2xl">
                            <div>
                                <img className="w-full h-30" src={item.image} alt="Image-Error" loading="lazy" />
                            </div>
                            <h5 className="text-[15px] mt-2! font-mono line-clamp">{item.title}</h5>
                            <div className="flex items-center justify-between gap-5">
                                <span className="text-red-500 font-mono">${item.price}</span>
                                <div className="flex gap-2">
                                    <FaHeart onClick={() => dispatch(AddToFavourite({
                                        id: item.id,
                                        image: item.image,
                                        title: item.title,
                                        price: item.price,
                                        quantity: 1,
                                    }))} size={20} className={`cursor-pointer ${color_favourait[item.id] && "text-red-500"} transition duration-300 rounded-full`}/>
                                    <FaCartPlus onClick={() => dispatch(AddToCart({
                                        id: item.id,
                                        image: item.image,
                                        title: item.title,
                                        price: item.price,
                                        quantity: 1,
                                    }))} size={20} className={`cursor-pointer ${color_cart[item.id] && "text-green-500"} transition duration-300 rounded-full`}/>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 font-mono">
                                <span className="flex gap-[3px]">
                                    <IoIosStar className="text-amber-500"/>
                                    <IoIosStar className="text-amber-500"/>
                                    <IoIosStar className="text-amber-500"/>
                                    <IoStarHalfOutline className="text-amber-500"/>
                                </span>
                                <span className="text-gray-500">({item.rating.count})</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container mx-auto! px-[5%]! my-20!">
                <div className="flex items-center gap-3">
                    <div className="bg-red-500 w-5 h-12 rounded"></div>
                    <span className="text-red-500">Featured</span>
                </div>
                <div className="my-7!">
                    <span className="md:text-3xl text-[20px] font-bold">New Arrival</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <img className="w-full" src={Img3} alt="Image-Error" loading="lazy" />
                    <div className="flex flex-col gap-7">
                        <img className="w-full" src={Img4} alt="Image-Error" loading="lazy" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <img className="w-full" src={Img5} alt="Image-Error" loading="lazy" />
                            <img className="w-full" src={Img6} alt="Image-Error" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
            <About/>
        </section>
    )
}

export default Home