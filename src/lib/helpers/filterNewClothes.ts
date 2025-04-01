import { ClothingItem } from '../types/types';

function filterNewClothes(clothes: ClothingItem[]): ClothingItem[] {
  return clothes.filter(item => item.isNew === 1);
}

export default filterNewClothes;