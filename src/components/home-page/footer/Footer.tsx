import Link from "next/link";
import { fontPlay } from "../../../../public/assets/fonts/fonts";

function Footer() {
  return(
    <footer 
      id='news' 
      className='h-full w-full mt-32 absolute flex flex-col 
      justify-evenly items-center bg-black text-white'
    >
      <div className='relative z-9 flex flex-col items-center'>
        <h2 className='text-2xl md:text-5xl mb-6 text-center'>
          Sign up to receive <span className='font-bold'>SOLARIS</span> news
        </h2>
        <p className='text-md md:text-xl text-gray-100 text-center'>
          Get exclusive updates on the collection <br className="md:hidden"/>
          launch, personalized communications, 
          and the latest news from the brand.
        </p>
      </div>

      <div 
        className='relative z-9 w-full flex flex-col items-center
        xl:flex-row-reverse 2xl:w-[1500px]'
      >
        {/* Newsletter Section */}
        <div className="flex flex-col justify-center items-center mt-10 xl:items-start">
          <div className="flex flex-col justify-center items-center xl:items-start">
            <h4 className='text-2xl mb-4 text-gray-200 font-[400]'>NEWS</h4>
            <p className='text-md mb-4 text-gray-200 text-center'>
              You will instantly receive the latest offers and news about our brand.
            </p>
          </div>
          <form action='POST' className='flex flex-col gap-3 items-center'>
            <div className="flex flex-col gap-3 mb-4 md:flex-row">
              <input 
                className={`${fontPlay.className} w-72 pl-3 h-10 rounded-sm bg-slate-800`} 
                type='text' 
                placeholder='First Name'
                aria-label='First Name'
              />
              <input 
                className={`${fontPlay.className} w-72 pl-3 h-10 rounded-sm bg-slate-800`} 
                type='text' 
                placeholder='example@solaris.com'
                aria-label='Email Address'
              />
              
            </div>
            <button 
              id='sign-up-btn' 
              className='btn-custom-no-absolute cursor-pointer items-center z-10
               flex justify-center text-white font-semibold xl:bottom-4 h-[40px]'>
              SIGN UP
            </button>
          </form>
        </div>

        {/* Sitemap Links */}
        <div className='hidden w-full flex-col px-20 py-20 sm:flex'>
          <h4 className='text-2xl mb-4 text-gray-500 font-[400]'>SITEMAP</h4>
          <div className='flex gap-20 justify-between xl:justify-normal'>
            <ul>
              <div className='flex flex-col gap-2 text-gray-300'>
                <Link href='#' className='border-b pb-1 hover:text-white transition-all duration-200'>HOME</Link>
                <Link href='/shop' className='border-b pb-1 hover:text-white transition-all duration-200'>SHOP</Link>
                <Link href='#' className='border-b pb-1 hover:text-white transition-all duration-200'>NEWS</Link>
              </div>
            </ul>
            <ul className='flex flex-col gap-2 text-gray-300'>
              <Link href='#' className='border-b pb-1 hover:text-white transition-all duration-200'>Terms & Conditions</Link>
              <Link href='#' className='border-b pb-1 hover:text-white transition-all duration-200'>Privacy Policy</Link>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <p className='relative z-10 flex flex-col text-gray-500'>
        ©2025 SOLARIS. - All rights reserved.
      </p>

      {/* Large background text */}
      <h1 
        className='absolute z-0 text-6xl font-extrabold text-gray-900 select-none
        sm:text-9xl md:text-[150px] lg:text-[200px] xl:text-[250px] 2xl:text-[350px]'
      >
        SOLARIS
      </h1>
    </footer>
  )
}

export default Footer;