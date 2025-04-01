import { Category } from "@/lib/types/types";
import { Filters } from "@/lib/types/types";

function categoriesForFilter(categories: Category[]): { [key: string]: boolean } {
  const booleanCategories: Filters = {};

  categories.forEach(category => {
    booleanCategories[category.name] = false;
  });

  return booleanCategories;
}

export default categoriesForFilter