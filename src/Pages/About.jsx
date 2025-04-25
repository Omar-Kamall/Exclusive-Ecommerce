import { lazy } from 'react'
import { Img11, Img12, Img13, Img14, Img15, Img16, Img17, Img7, Img8 } from '../../public/assets'
import { CiTwitter } from 'react-icons/ci'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
const Part_About =lazy(() => import ("../Components/about"));

const About = () => {
    return (
        <section className='py-20! loading'>
            <div className="container mx-auto! px-[5%]! grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="flex flex-col justify-center gap-5">
                    <h2 className='text-6xl font-bold'>Our Story</h2>
                    <p>Launced in 2015, Exclusive is South Asia,s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>
                <div className='shadow-2xl'>
                    <img className='w-2xl' src={Img11} alt="Image-Error" />
                </div>
            </div>
            <section className="container mx-auto! px-[5%]! mt-25! grid grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="border-1 rounded flex flex-col justify-center items-center gap-3 shadow-2xl p-5!">
                    <img src={Img12} alt="Image-Error" loading='lazy'/>
                    <span className="font-extrabold">10.5k</span>
                    <span className="flex justify-center">Sallers active our site</span>
                </div>
                <div className="border-1 rounded flex flex-col justify-center items-center gap-3 shadow-2xl p-5!">
                    <img src={Img13} alt="Image-Error" loading='lazy'/>
                    <span className="font-extrabold">33k</span>
                    <span className="flex justify-center">Mopnthly Produduct Sale</span>
                </div>
                <div className="border-1 rounded flex flex-col justify-center items-center gap-3 shadow-2xl p-5!">
                    <img src={Img14} alt="Image-Error" loading='lazy'/>
                    <span className="font-extrabold">45.5k</span>
                    <span className="flex justify-center">Customer active in our site</span>
                </div>
                <div className="border-1 rounded flex flex-col justify-center items-center gap-3 shadow-2xl p-5!">
                    <img src={Img15} alt="Image-Error" loading='lazy'/>
                    <span className="font-extrabold">25k</span>
                    <span className="flex justify-center">Anual gross sale in our site</span>
                </div>
            </section>
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
            <Part_About/>
        </section>
    )
}

export default About