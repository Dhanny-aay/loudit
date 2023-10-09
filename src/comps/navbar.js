import logo from '../images/logo.svg';
import menu from '../images/menu.svg';

const Navbar = () => {
    return ( 
        <>
        <div className=" w-full px-4 z-20 md:px-12 lg:px-16">
            <div className=" w-full flex flex-row justify-between items-center py-5">
                <span className=' flex items-center space-x-1'>
                    <img src={ logo } alt="" />
                    <p className=' text-2xl font-bold font-Kalam'>Loudit</p>
                </span>
                <span className='hidden md:flex items-start space-x-5'>
                    <p className=' text-base text-[#272D37] border-b-[3px] px-1 border-black pb-1 font-semibold font-Lora'>My Blog</p>
                    <p className=' text-base text-[#272D37] font-semibold font-Lora'>My Gallery</p>
                </span>
                <button className='text-base hidden md:block font-semibold font-Lora bg-[#1e1e1e] text-white rounded-[30px] px-[18px] py-3'>Contact me</button>
                <img src={ menu } className='block md:hidden' alt="" />
            </div>
        </div>
        </>
     );
}
 
export default Navbar;