import { fontPlay } from "../../../../public/assets/fonts/fonts";
import RenderCategoryEl from "./RenderCategoryEl";

function SortByCategories() {
  return(
    <section id='categories' className="flex flex-col items-center mt-20 xl:mb-20">
      <header>
        <h1 className="text-7xl font-bold pb-8 text-center">
          SHOP BY <span className={`${fontPlay.className}`}>CATEGORY</span>
        </h1>
      </header>
      <RenderCategoryEl />
    </section>
  )
}

export default SortByCategories