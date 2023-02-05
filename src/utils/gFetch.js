let productos = [
  { id: '1' ,categoria: 'indumentaria', name: "producto 1",   price: 37, foto:'https://brunosmoda.com/wp-content/uploads/2021/01/CAMISETA-NEGRA-LISA-HOMBRE-10043675_000-5.jpg' },
  { id: '2' ,categoria: 'indumentaria', name: "producto 2", price: 27, foto:'https://brunosmoda.com/wp-content/uploads/2021/01/CAMISETA-NEGRA-LISA-HOMBRE-10043675_000-5.jpg' },
  { id: '3' ,categoria: 'calzado', name: "producto 3",    price: 40, foto:'https://brunosmoda.com/wp-content/uploads/2021/01/CAMISETA-NEGRA-LISA-HOMBRE-10043675_000-5.jpg' },
  { id: '4' ,categoria: 'calzado', name: "producto 1",   price: 37, foto:'https://brunosmoda.com/wp-content/uploads/2021/01/CAMISETA-NEGRA-LISA-HOMBRE-10043675_000-5.jpg' },
  { id: '5' ,categoria: 'accesorios', name: "producto 2", price: 27, foto:'https://brunosmoda.com/wp-content/uploads/2021/01/CAMISETA-NEGRA-LISA-HOMBRE-10043675_000-5.jpg' },
  { id: '6' ,categoria: 'accesorios', name: "producto 3",    price: 40, foto:'https://brunosmoda.com/wp-content/uploads/2021/01/CAMISETA-NEGRA-LISA-HOMBRE-10043675_000-5.jpg' }
] 

export const gFetch = () => {
  return new Promise((res,rej)=>{    
    setTimeout(()=>{
      res(productos)
    }, 1000) 
 })

} 

