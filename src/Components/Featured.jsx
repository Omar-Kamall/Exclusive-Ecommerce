import { Img3, Img4, Img5, Img6 } from "../../public/assets";

const Featured = () => {
    return (
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
    )
}

export default Featured