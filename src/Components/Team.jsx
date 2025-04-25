import { Img16, Img17, Img7, Img8 } from '../../public/assets';
import { CiTwitter } from 'react-icons/ci';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Team = () => {
    return (
        <section className="container mx-auto! px-[5%]! my-25! grid grid-cols-2 lg:grid-cols-4 gap-5">
                    <div>
                        <img className="w-70 bg-gray-200 rounded" src={Img7} alt="Image-Error" loading='lazy' />
                        <h4 className="font-bold text-2xl mt-3!">Tom Cruise</h4>
                        <span className="">Founder & Chairman</span>
                        <div className="flex gap-2 mt-2!">
                            <CiTwitter className="cursor-pointer"/>
                            <FaInstagram className="cursor-pointer"/>
                            <FaLinkedinIn className="cursor-pointer"/>
                        </div>
                    </div>
                    <div>
                        <img className="w-70 bg-gray-200 rounded" src={Img8} alt="Image-Error" loading='lazy' />
                        <h4 className="font-bold text-2xl mt-3!">Will Smith</h4>
                        <span className="">Managing Director</span>
                        <div className="flex gap-2 mt-2!">
                            <CiTwitter className="cursor-pointer"/>
                            <FaInstagram className="cursor-pointer"/>
                            <FaLinkedinIn className="cursor-pointer"/>
                        </div>
                    </div>
                    <div>
                        <img className="w-70 bg-gray-200 rounded" src={Img16} alt="Image-Error" loading='lazy' />
                        <h4 className="font-bold text-2xl mt-3!">Tolga Saritash</h4>
                        <span className="">Product Designer</span>
                        <div className="flex gap-2 mt-2!">
                            <CiTwitter className="cursor-pointer"/>
                            <FaInstagram className="cursor-pointer"/>
                            <FaLinkedinIn className="cursor-pointer"/>
                        </div>
                    </div>
                    <div>
                        <img className="w-70 bg-gray-200 rounded" src={Img17} alt="Image-Error" loading='lazy' />
                        <h4 className="font-bold text-2xl mt-3!">Omar Kamal</h4>
                        <span className="">Front-end Devolper</span>
                        <div className="flex gap-2 mt-2!">
                            <CiTwitter className="cursor-pointer"/>
                            <FaInstagram className="cursor-pointer"/>
                            <FaLinkedinIn className="cursor-pointer"/>
                        </div>
                    </div>
        </section>
    )
}

export default Team