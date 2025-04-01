import { ClothingItem } from "@/lib/types/types";
import { Filters } from "@/lib/types/types";

function filterClothesByCategories(clothes: ClothingItem[], filter: Filters): ClothingItem[] {
  const activeCategories = Object.keys(filter).filter(key => filter[key]);

  if (activeCategories.length === 0) return clothes

  return clothes.filter(cloth => activeCategories.includes(cloth.category));
}

export default filterClothesByCategories