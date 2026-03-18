import { createContext, useContext, useReducer } from 'react'

const CartContext = createContext(null)

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const exists = state.find(i => i.id === action.produto.id)
      if (exists) return state.map(i => i.id === action.produto.id ? {...i, qty: i.qty + 1} : i)
      return [...state, { ...action.produto, qty: 1 }]
    }
    case 'REMOVE':
      return state.filter(i => i.id !== action.id)
    case 'UPDATE':
      if (action.qty <= 0) return state.filter(i => i.id !== action.id)
      return state.map(i => i.id === action.id ? {...i, qty: action.qty} : i)
    case 'CLEAR':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [])
  const total = items.reduce((s, i) => s + i.preco * i.qty, 0)
  const count = items.reduce((s, i) => s + i.qty, 0)
  const add    = (p)       => dispatch({ type:'ADD', produto: p })
  const remove = (id)      => dispatch({ type:'REMOVE', id })
  const update = (id, qty) => dispatch({ type:'UPDATE', id, qty })
  const clear  = ()        => dispatch({ type:'CLEAR' })
  return (
    <CartContext.Provider value={{ items, total, count, add, remove, update, clear }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
