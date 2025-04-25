import { Img11 } from '../../public/assets'

const OurStory = () => {
    return (
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
    )
}

export default OurStory