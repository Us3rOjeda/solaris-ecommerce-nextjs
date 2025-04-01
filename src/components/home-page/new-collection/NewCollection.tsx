import { fontPlay } from "../../../../public/assets/fonts/fonts";
import RenderCollectionEl from "./RenderCollectionEl";

function NewCollection() {
  return (
    <section id='new-collection' 
      className="xl:h-full xl:flex xl:justify-center xl:items-center xl:flex-col"
    >
      <header className='flex flex-col items-center mt-12 mb-12'>
        <h2 id='new-in-title' className='text-4xl md:text-7xl font-bold mb-4 text-center'>
          NEW <span className={`${fontPlay.className}`}>COLLECTION</span>
        </h2>
        <p id='new-in-sub' className='text-lg text-center'>
          Check out the new <span className='font-bold'>Bodysuits-[0X] <span className='italic'>Collection</span></span> available in our store.
        </p>
      </header>
      <RenderCollectionEl />
    </section>
    
  )
}

export default NewCollection