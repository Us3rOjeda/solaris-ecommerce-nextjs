import { Provider } from "react-redux"
import { Props } from "../types/types"
import { store } from "../store/store"

function StoreProvider({ children }: Props) {
  return <Provider store={store}>{children}</Provider>
}

export default StoreProvider;