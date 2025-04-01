export type ClothesId = `${string}-${string}-${string}-${string}-${string}`
type imagesURL = `/${string}-${string}/${string}.${string}`

export interface ClothingItem {
  id: ClothesId
  name: string
  category: string
  price: string
  frontImg: imagesURL
  backImg: imagesURL
  isNew: 0 | 1
}

export interface ClothingItemWithQuantity extends ClothingItem {
  quantity: number
}

export type RenderNavOptionsProps = {
  ulClasses: string
  liClasses?: string
  linkClasses?: string
  spanClasses?: string
}

export type RenderShopClothesProps = {
  clothes: ClothingItem[]
}

export type Category = {
  id: number
  name: string 
}

export type Filters = {
  [key: string]: boolean
}

export type SVGProps = {
  color1: string
}

export type SVGArrowProps = {
  className: string
}

export interface CartContextType {
  addItemToCart: (item: ClothingItemWithQuantity) => void
}

export interface Props {
  children: ReactNode
}

export type RenderImagesProps = {
  name: string | undefined
  backImg: string | undefined
  frontImg: string | undefined
}