import logo from '../../assets/logo.png'
const Navbar = () => {
    return (
        <>
            <div className='flex w-full justify-center items-center shadow-sm bg-white p-6'>
                <div className='w-[98%] flex justify-between items-center'>
                    <img src={logo} className=' h-6'/>    
                    <div className='flex items-center gap-20'>
                        <div className='flex items-center gap-6 text-sm font-semibold'>
                            <p>Features</p>
                            <p>Exchanges</p>
                            <p>How it Works?</p>
                            <p>Blog</p>
                            <p>About us</p>
                        </div>
                        <div className='border border-solid p-2 border-KoinXBlue text-sm font-semibold w-24 flex items-center justify-center'>
                            <button className='text-KoinXBlue'>Sign up</button>
                        </div>
                    </div>
                </div>
            </div>        
        </>
    )
}
export default Navbar;