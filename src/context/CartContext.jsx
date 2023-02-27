import { useState, createContext, useContext } from "react";

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const [totalCart, setTotalCart] = useState(0)
  
    const addCart = (newProduct) => {
      const inArray = cartList.findIndex(
        (product) => product.id === newProduct.id
      )
      if (inArray === -1) 
        {setCartList([ 
          ...cartList,
          newProduct
          ])
        }
      else 
      {
        cartList[inArray].total += newProduct.total
        
      }
      setTotalCart(newProduct.total + totalCart)
    }

    const removeProduct = (productId) => {
      const cart = cartList.filter(product => product.id === productId)
      cart.map((item) => setTotalCart(totalCart - item.total))
      const newCartList = cartList.filter(product => product.id !== productId)
      setCartList(newCartList)
    }

    const totalPriceCart = () => {
      return cartList.reduce(
        (add, product) => add + (product.total * product.price),
        0
      );
    };

    const emptyCart = () => {setCartList([]), setTotalCart(0)}

  return (
    <CartContext.Provider value={{cartList, addCart, emptyCart, removeProduct, totalPriceCart, totalCart}}>
        {children}
    </CartContext.Provider>
  )
}
