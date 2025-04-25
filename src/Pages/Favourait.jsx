import { useDispatch, useSelector } from 'react-redux'
import { RemoveToFavourite, ClearAllFavourait } from '../Redux/appSlice';
import { Link } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Favourait = () => {
    const dispath = useDispatch();
    const products = useSelector((state) => state.AppReducer.favourait);
    return (
        <div className='container mx-auto! px-[5%]! pt-20! pb-80!'>
            <div className="overflow-x-auto">
                <table className='w-full'>
                    <thead>
                        <tr className='border-2 border-gray-200 mb-15!'>
                            <th className="p-5!">
                                <span className="text-black font-mono">Product</span>
                            </th>
                            <th className='p-5!'>
                                <span className="text-black font-mono">Price</span>
                            </th>
                            <th className='p-5!'>
                                <span className="text-black font-mono">Remove</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="border-b border-gray-200">
                                <th>
                                    <div className="flex gap-4 p-5!">
                                        <img className='w-10 h-10' src={product.image} alt="Image-Error" loading='lazy' />
                                        <h5 className="text-[15px] mt-2! font-mono line-clamp">{product.title}</h5>
                                    </div>
                                </th>
                                <th>
                                    <span className="text-black font-mono w-20">${(product.price).toFixed(2)}</span>
                                </th>
                                <th className="flex justify-center py-6!">
                                    <RiDeleteBin6Line onClick={() => dispath(RemoveToFavourite({
                                        id: product.id,
                                        image: product.image,
                                        title: product.title,
                                        price: product.price,
                                    }))} className='cursor-pointer text-red-500' size={25}/>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between mt-5!">
                <Link to="/"><button className='bg-red-500 text-white px-5! py-2! cursor-pointer hover:bg-red-700 transition duration-300 rounded'>Shop</button></Link>
                <div className="flex items-center gap-5">
                    <button onClick={() => dispath(ClearAllFavourait())} className='bg-red-500 text-white px-5! py-2! cursor-pointer hover:bg-red-700 transition duration-300 rounded'>Clear All</button>
                </div>
            </div>
        </div>
    )

}

export default Favourait