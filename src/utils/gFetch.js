let products = [
  { id: '1' ,category: 'indumentaria', name: "Remera",  stock: 8 ,  price: 37,  desc: 'Remera 100% algodón',                  pic:'https://brunosmoda.com/wp-content/uploads/2022/06/CAMISETA-BEIGE-MUJER-10047784_110-4.jpeg' },
  { id: '2' ,category: 'indumentaria', name: "Campera", stock: 8 ,  price: 27,  desc: 'Campera para adultos',                 pic:'https://brunosmoda.com/wp-content/uploads/2022/08/CHAQUETA-ACOLCHADA-AZUL-CLARO-MUJER-10046929_738-2.jpg' },
  { id: '3' ,category: 'calzado', name: "Botas",        stock: 8 ,  price: 40,  desc: 'Producto realizado con cuero vacuno',  pic:'https://brunosmoda.com/wp-content/uploads/2022/09/BOTAS-BEIGE-MUJER-LOIS-JEANS-85771-1.jpg' },
  { id: '4' ,category: 'calzado', name: "Zapatillas",   stock: 8 ,  price: 37,  desc: 'Producto realizado con cuero vacuno',  pic:'https://brunosmoda.com/wp-content/uploads/2022/09/ZAPATILLAS-NEGRAS-Y-ROSAS-CHICA-MUJER-10046804_000-4.jpg' },
  { id: '5' ,category: 'accesorios', name: "Cartera",   stock: 8 ,  price: 27,  desc: 'Producto realizado con cuero vacuno',  pic:'https://brunosmoda.com/wp-content/uploads/2019/08/10029645_558_2.jpg' },
  { id: '6' ,category: 'accesorios', name: "Cinturón",  stock: 8 ,  price: 40,  desc: 'Producto realizado con cuero vacuno',  pic:'https://brunosmoda.com/wp-content/uploads/2022/09/CINTURON-ELASTICO-TRENZADO-MARRON-MULTICOLOR-HOMBRE-11310-1.jpg' }
] 

export const gFetch = () => {
  return new Promise((res,rej)=>{    
    setTimeout(()=>{
      res(products)
    }, 1000) 
 })

} 

