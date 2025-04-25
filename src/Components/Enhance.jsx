import { Img10 } from '../../public/assets'

const Enhance = () => {
    return (
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
    )
}

export default Enhance 