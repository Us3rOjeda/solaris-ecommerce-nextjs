"use client"

import Clothes from "../../mocks/clothes.json"
import { useSearchParams } from "next/navigation";
import { ClothesId } from "../types/types";

function getItemById() {
  const itemIdParams = useSearchParams();
  const itemId = itemIdParams.get('id') as ClothesId;

  if( itemId !== undefined || itemId !== null ) {
    const itemFounded = Clothes.find((item) => item.id === itemId);
    if (itemFounded !== undefined) {
      return itemFounded
    }
  }
}

export default getItemById;