"use client"

import RenderShopClothes from "@/components/shop-page/RenderShopClothes";
import Categories from "../../mocks/categories.json";
import Clothes from "../../mocks/clothes.json";
import { ClothingItem } from "@/lib/types/types";
import { Category } from "@/lib/types/types";
import filterClothesByCategories from "@/lib/helpers/filterClothesByCategory";
import { useState, useEffect } from "react";
import categoriesForFilter from "@/lib/helpers/categoriesForFilter";
import { useSearchParams } from "next/navigation";

function ShopPage() {
  const filterCategory = categoriesForFilter(Categories);
  const [filters, setFilters] = useState(filterCategory);
  const [filterParamsValue, setFilterParamsValue] = useState<string | null>(null);

  // Usamos useEffect para obtener el valor de los parámetros solo en el cliente
  useEffect(() => {
    const filterParams = useSearchParams();
    const categoryFromParams = filterParams.get('category');
    if (categoryFromParams) {
      setFilterParamsValue(categoryFromParams);
    }
  }, []); // Solo se ejecuta una vez, cuando el componente se monta

  // Si hay un valor en filterParamsValue, lo aplicamos a los filtros
  useEffect(() => {
    if (filterParamsValue) {
      setFilters(prevFilters => ({
        ...prevFilters,
        [filterParamsValue]: true,
      }));
    }
  }, [filterParamsValue]);

  // Filtramos las prendas en base a los filtros
  const filteredClothes: ClothingItem[] = filterClothesByCategories(Clothes as ClothingItem[], filters);

  const handleCheckboxChange = (categoryName: string) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [categoryName]: !prevFilters[categoryName]
    }));
  }

  return (
    <section>
      <div className="h-14 flex flex-col items-center font-semibold tracking-wider border-[1px] border-gray-200
      md:flex-row md:gap-8 md:justify-center"
      >
        <p>Filter By Category:</p>
        <ul className="flex gap-2 items-center">
          {
            Categories.map((category: Category) => (
              <li key={category.id}>
                <label 
                  htmlFor="" 
                  className="flex items-center gap-2 cursor-pointer 
                  select-none" 
                  onClick={() => handleCheckboxChange(category.name)} 
                >
                  <input 
                  type="checkbox"
                  className="cursor-pointer"
                  readOnly
                  checked={filters[category.name] || false} 
                  value={category.name}/> {category.name}
                </label>
              </li>
            ))
          }
        </ul>
      </div>
      <RenderShopClothes clothes={filteredClothes}/>
    </section>
  );
}

export default ShopPage;
