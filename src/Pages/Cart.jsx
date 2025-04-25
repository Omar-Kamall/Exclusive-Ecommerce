import { useDispatch, useSelector } from 'react-redux'
import { ClearAllProducts , Decrement, Increment } from '../Redux/appSlice';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Cart = () => {
    const navigate = useNavigate();
    const dispath = useDispatch();
    const products = useSelector((state) => state.AppReducer.products);
    const Total = products.reduce((acc , product) => acc + ((product.price-(product.price*(product.id/100))) * product.quantity),0);
    const Check_Out = () => {
        Swal.fire({
            title: 'Do You Want Buy Products .?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: "Yeah",
            cancelButtonText: 'No'
        }).then(result => {
            if (result.isConfirmed) {
                const username= localStorage.getItem("username");
                if(!username)
                {
                    navigate("/signin");
                    return;
                }
                dispath(ClearAllProducts());
            }
        })
    }
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
                                <span className="text-black font-mono">Quantity</span>
                            </th>
                            <th className='p-5!'>
                                <span className="text-black font-mono">Subtotal</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="border-b border-gray-200">
                                <th>
                                    <div className="flex gap-4 -5!">
                                        <img className='w-10 h-10' src={product.image} alt="Image-Error" loading='lazy' />
                                        <h5 className="text-[15px] mt-2! font-mono line-clamp">{product.title}</h5>
                                    </div>
                                </th>
                                <th>
                                    <span className="text-black font-mono w-20">${(product.price-(product.price*(product.id/100))).toFixed(2)}</span>
                                </th>
                                <th className="flex justify-center py-3!">
                                    <div className="flex items-center gap-3 w-20 border-2 px-5! rounded-2xl">
                                        <span>{product.quantity}</span>
                                        <div className="flex flex-col">
                                            <button className='cursor-pointer' onClick={() => dispath(Decrement({id: product.id}))}>-</button>
                                            <button className='cursor-pointer' onClick={() => dispath(Increment({id: product.id}))}>+</button>
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <span className="text-black font-mono w-20">${((product.quantity) * (product.price-(product.price*(product.id/100)))).toFixed(2)}</span>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between mt-5!">
                <Link to="/"><button className='bg-red-500 text-white px-5! py-2! cursor-pointer hover:bg-red-700 transition duration-300 rounded'>Shop</button></Link>
                <div className="flex items-center gap-3">
                    <span className='flex items-center'>Total: <span className='text-red-500'>${Total.toFixed(2)}</span></span>
                    <button type='button' onClick={Check_Out} className='bg-red-500 text-white px-5! py-2! cursor-pointer hover:bg-red-700 transition duration-300 rounded' disabled={Total === 0}>checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart