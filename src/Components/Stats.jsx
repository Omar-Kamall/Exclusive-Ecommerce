import { Img12, Img13, Img14, Img15 } from '../../public/assets'

const Stats = () => {
    return (
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
    )
}

export default Stats