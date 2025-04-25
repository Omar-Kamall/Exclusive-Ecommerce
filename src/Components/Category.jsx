import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { CiHeadphones } from "react-icons/ci";
import { SiYoutubegaming } from "react-icons/si";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoCameraOutline } from "react-icons/io5";

const Category = () => {
    return (
        <section className="container mx-auto! px-[5%]! my-20!">
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
        </section>
    )
}

export default Category