import { LuSendHorizontal } from 'react-icons/lu'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate();
    const handle_event = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        if(email.length >= 10)
        {
            navigate("/signup" , {state:{email}});
            e.target.email.value = "";
        }
    }
    return (
        <footer className='bg-black text-white pt-10!'>
            <div className="container mx-auto! px-[5%]! grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div>
                    <Link to="/" className='font-bold text-2xl hover:text-red-500 transition duration-300'><h1>Exclusive</h1></Link>
                    <h3 className='mt-4!'>Subscribe</h3>
                    <p>Get 10% Off Your Frist Order</p>
                    <form onSubmit={handle_event} className="relative mt-2!">
                        <input className='p-1! border-1 rounded w-60' type="text" name='email' placeholder='Enter Email'/>
                        <button className='absolute top-1/2 transform -translate-y-1/2 left-53'><LuSendHorizontal className='text-red-500 cursor-pointer'/></button>
                    </form>
                </div>
                <div>
                    <h3 className='text-[20px]'>Support</h3>
                    <p className='mt-4!'>111 Bijoy sarani, Dhaka,<br/> DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <span>+88015-88888-9999</span>
                </div>
                <div className="flex flex-col">
                    <h3 className='text-[20px]'>Account</h3>
                    <Link to="/" className='mt-4!'>My Account</Link>
                    <Link to="/signin">Login</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/">Shop</Link>
                </div>
                <div className="flex flex-col">
                    <h3 className='text-[20px]'>Quick Link</h3>
                    <Link to="/" className='mt-4!'>Privacy Policy</Link>
                    <Link to="/">Terms Of Use</Link>
                    <Link to="/">FAQ</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <div className="text-center mt-5! pb-3! text-gray-500">
                <Link className='hover:text-red-500 transition duration-300' to="https://api.whatsapp.com/send?phone=1006677452">@ Devolped By Omar Kamal 2025</Link>
            </div>
        </footer>
    )
}

export default Footer