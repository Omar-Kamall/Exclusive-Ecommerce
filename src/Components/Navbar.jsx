import { useEffect, useState } from 'react'
import { CiHeart } from 'react-icons/ci';
import { FaBars } from 'react-icons/fa';
import { IoCartOutline, IoCloseCircleOutline } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
// Alert
import Swal from 'sweetalert2';
// Firebase Sign Out
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
const firebaseConfig = {
    apiKey: "AIzaSyAcw45WNuMGBcVqgZV6Gdma3quGxmAdLyM",
    authDomain: "e-commerce-6bf5b.firebaseapp.com",
    projectId: "e-commerce-6bf5b",
    storageBucket: "e-commerce-6bf5b.firebasestorage.app",
    messagingSenderId: "35742624401",
    appId: "1:35742624401:web:ba2f4d22574ee1ae076d30",
    measurementId: "G-WL9SFR276J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const SignOut = () => {
    Swal.fire({
        title: 'Do You Want To Sign Out',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Yeah",
        cancelButtonText: 'No'
    })
    .then((result) => {
        if(result.isConfirmed){
            signOut(auth)
            .then(() => {
                localStorage.removeItem("username");
                location.href = "/";
            })
            .catch((error) => {
                console.error("Sign-out error:", error);
            })
        }
    })
}

const Navbar = () => {
    const Num_Proucts = useSelector(state => state.AppReducer.products.length);
    const Num_Favourite = useSelector(state => state.AppReducer.favourait.length);
    const location = useLocation();
    const [name , setName] = useState("");
    const [user , setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setName(currentUser.displayName || localStorage.getItem("username") || "");
            } else {
                setUser(null);
                setName("");
            }
        });return () => unsubscribe();
    },[location])
    const links = [
        {id: 0 , name: "Home" , to: "/"},
        {id: 1 , name: "Contact" , to: "/contact"},
        {id: 2 , name: "About" , to: "/about"},
    ];
    const [bar , setBar] = useState(false);
    return (
        <nav className='fixed w-full bg-white border-b-1 border-gray-300 z-100'>
            <div className='container mx-auto! px-[5%]!'>
                <div className="h-15 flex items-center justify-between">
                    <div className=""><Link className='font-bold text-2xl hover:text-red-500 transition duration-300' to="/"><h1>Exclusive</h1></Link></div>
                    <div className="md:flex gap-5 hidden">
                        {links.map(link => (
                            <Link className='text-[18px] hover:bg-red-500 hover:text-white px-2! py-1! rounded transition duration-300' key={link.id} to={link.to}>{link.name}</Link>
                        ))}
                        {!user ? <Link className='text-[18px] hover:bg-red-500 hover:text-white px-2! py-1! rounded transition duration-300' to={"/signin"}>Sign In</Link> : 
                            <button onClick={SignOut} className='text-[18px] hover:bg-red-500 hover:text-white px-2! py-1! rounded transition duration-300 cursor-pointer'>Sign Out</button>
                        }
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <span className='absolute top-[-12px] left-[-7px] text-red-500'>{Num_Favourite}</span>
                            <Link to="/favourait"><CiHeart size={30}/></Link>
                        </div>
                        <div className="relative">
                            <span className='absolute top-[-12px] left-[-10px] text-red-500'>{Num_Proucts}</span>
                            <Link to="/cart"><IoCartOutline size={30}/></Link>
                        </div>
                        {(name.length > 0 && location.pathname !== "/signin" ) && <span className='bg-gray-300 px-[10px]! py-1! rounded-full'>{name.slice(0,1).toUpperCase(name)}</span> }
                        <div className="md:hidden">
                            {!bar ? <FaBars onClick={() => setBar(true)} className='hover:text-red-500 cursor-pointer' size={30}/> : 
                            <IoCloseCircleOutline onClick={() => setBar(false)} className='hover:text-red-500 cursor-pointer' size={30}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={`md:hidden container mx-auto! transform ${bar ? `translate-x-0` : `translate-x-[350px]`} transition duration-600`}>
                <div className="bg-white w-[220px] h-screen mt-2! right-[5%] fixed z-[9999] border-2 rounded">
                    <div className='flex flex-col justify-center gap-4 p-5!'>
                        {links.map(link => (
                            <Link onClick={() => setBar(false)} className='text-[18px] border-b-2 hover:bg-red-500 hover:text-white w-full hover:rounded px-2! py-1! transition duration-300' key={link.id} to={link.to}>{link.name}</Link>
                        ))}
                        {user ? <div className="flex justify-center mt-2!">
                            <button onClick={SignOut} className='bg-red-500 px-5! py-1! hover:bg-red-700 text-white rounded-2xl cursor-pointer transition duration-300'>Sign Out</button>
                        </div> : <Link onClick={() => setBar(false)} className='text-[18px] border-b-2 hover:bg-red-500 hover:text-white w-full hover:rounded px-2! py-1! transition duration-300' to={"/signin"}>Sigin In</Link> }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar