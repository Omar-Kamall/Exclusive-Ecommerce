import { Img18, Img19, Img20 } from "../../public/assets"

const about = () => {
    return (
        <section>
            <div className="container mx-auto! px-[3%]! grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="flex flex-col items-center justify-center">
                    <img src={Img18} alt="Image_Error" loading="lazy" />
                    <h5 className="mt-3!">FREE AND FAST DELIVERY</h5>
                    <span>Free delivery for all orders $140</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={Img19} alt="Image_Error" loading="lazy" />
                    <h5 className="mt-3!">24/7 CUSTOMER SERVICE</h5>
                    <span>Friendly 24/7 customer support</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={Img20} alt="Image_Error" loading="lazy" />
                    <h5 className="mt-3!">MONEY BACK GUARANTEE</h5>
                    <span>We reurn money 30 days</span>
                </div>
            </div>
        </section>
    )
}

export default about