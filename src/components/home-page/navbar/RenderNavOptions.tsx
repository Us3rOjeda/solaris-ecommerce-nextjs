import Link from 'next/link';
import { NAV_OPTIONS } from "../../../lib/constants/constants"
import { RenderNavOptionsProps } from "../../../lib/types/types"

function RenderNavOptions({ ulClasses, liClasses, linkClasses, spanClasses }: RenderNavOptionsProps) {
  
  return(
    <ul className={`${ulClasses}`}>
      {
        NAV_OPTIONS.map(option => (
        <li key={option} className={`${liClasses}`}>
          <Link 
            href={`${option === 'home' ? '/' : option === 'shop' ? '/shop' : '/#news'}`} 
            className={`${linkClasses}`}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </Link>
          <span className={`${spanClasses}`}>{/* this should be a sub line animation*/}</span>
        </li>
        ))
      }  
      {
        <li className={`lg:hidden ${liClasses}`}>
          <Link 
            href='/cart'
            className={`${linkClasses}`}>
              Cart
          </Link>
        </li>
      }
    </ul>
  )
}

export default RenderNavOptions 