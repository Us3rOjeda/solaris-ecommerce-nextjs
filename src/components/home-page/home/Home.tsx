import Link from "next/link"

function Home() {
  return(
    <section 
      id='home'
      className='bg-cover bg-center h-screen flex flex-col justify-center items-center
      xl:justify-normal'
      style={{ 
        backgroundImage: "url('/assets/images/home-image.jpg')",
        backgroundPosition: 'right'
      }}
    >
      {/* Background Overlay */}
      <div className='absolute inset-0 bg-black opacity-40'></div>

      <div 
        className="flex flex-col
        xl:w-full xl:h-full xl:relative xl:items-left xl:px-4"
      >
        <h1 
          id='home' 
          className='text-6xl flex font-extrabold text-white text-center select-none z-9
          xl:absolute xl:text-8xl xl:text-left xl:bottom-95 xl:mx-20'
        >
          UNLOCK YOUR <br className="hidden xl:inline"/>STYLE'S <br className="inline xl:hidden"/>POTENTIAL.
        </h1>

        <button
          id='home-btn' 
          className='absolute bottom-20 left-1/2 -translate-x-1/2 items-center 
          hover:scale-95 transition-transform duration-300 ease-in-out transform z-9
          xl:bottom-4'
        >
          <Link 
            href='/shop'
            className="flex justify-center items-center btn-custom text-white font-semibold rounded-none"
          >
            SHOP NOW
          </Link>
        </button>
      </div>
    </section>
  )
}

export default Home;