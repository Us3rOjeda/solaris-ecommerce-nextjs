import { ClothingItem } from "@/lib/types/types";

function getFirstCategoryElement(clothes: ClothingItem[]): ClothingItem[] {
  const firstCategoryElement: ClothingItem[] = [];
  const seenCategories = new Set<string>();
  
  clothes.forEach((item: ClothingItem) => {
    if (!seenCategories.has(item.category)) {
      firstCategoryElement.push(item);
      seenCategories.add(item.category);
    }
  });

  return firstCategoryElement;
}


export default getFirstCategoryElement;