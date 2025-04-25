import { Link } from 'react-router-dom'

const Notfound = () => {
    return (
        <div className='flex flex-col loading justify-center items-center h-screen'>
            <h2 className='text-5xl font-bold md:text-7xl'>404 Not Found</h2>
            <p className='m-5! text-center'>Your visited page not found. You may go home page.</p>
            <Link to="/">
                <button className="mt-5! text-white bg-red-500 px-3! py-2! md:px-10! hover:bg-red-700 transform duration-500 rounded cursor-pointer">Back to home page</button>
            </Link>
        </div>
    )
}

export default Notfound