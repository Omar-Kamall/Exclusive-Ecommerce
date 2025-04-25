import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, AddToFavourite } from "../Redux/appSlice";
import { useLoaderData } from "react-router-dom";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoStarHalfOutline } from "react-icons/io5";

const BestSeling = () => {
    const dispatch = useDispatch();
    const products = useLoaderData();
    const color_favourait = useSelector((state) => state.AppReducer.color_favourait);
    const color_cart = useSelector((state) => state.AppReducer.color_cart);
    return (
        <section className="container mx-auto! px-[5%]! my-20!">
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
        </section>
    )
}

export default BestSeling