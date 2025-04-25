import { FaCartPlus, FaHeart } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward, IoIosStar } from "react-icons/io";
import { IoStarHalfOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../Pages/styles.css';
// import required modules
import { Pagination , Autoplay, Navigation } from 'swiper/modules';
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, AddToFavourite } from "../Redux/appSlice";
import { useLoaderData } from "react-router-dom";

const Sales = () => {
    const dispatch = useDispatch();
    const products = useLoaderData();
    const color_favourait = useSelector((state) => state.AppReducer.color_favourait);
    const color_cart = useSelector((state) => state.AppReducer.color_cart);
    return (
        <section className="container mx-auto! px-[5%]! my-20!">
            <div className="flex items-center gap-3">
                <div className="bg-red-500 w-5 h-12 rounded"></div>
                <span className="text-red-500">Today's</span>
            </div>
            <div className="flex justify-between my-7!">
                <span className="md:text-3xl text-[20px] font-bold">Flash Sales</span>
                <div className="flex gap-5">
                    <button className="swiper-button-next rounded cursor-pointer"><IoIosArrowBack size={25}/></button>
                    <button className="swiper-button-prev rounded cursor-pointer"><IoIosArrowForward size={25}/></button>
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
        </section>
    )
}

export default Sales