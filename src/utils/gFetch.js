let productos = [
  { id: '1' ,categoria: 'indumentaria', name: "Remera",   price: 37,descripcion: 'Remera 100% algodón', foto:'https://brunosmoda.com/wp-content/uploads/2022/06/CAMISETA-BEIGE-MUJER-10047784_110-4.jpeg' },
  { id: '2' ,categoria: 'indumentaria', name: "Campera", price: 27, descripcion: 'Campera para adultos', foto:'https://brunosmoda.com/wp-content/uploads/2022/08/CHAQUETA-ACOLCHADA-AZUL-CLARO-MUJER-10046929_738-2.jpg' },
  { id: '3' ,categoria: 'calzado', name: "Botas",    price: 40,descripcion: 'Producto realizado con cuero vacuno', foto:'https://brunosmoda.com/wp-content/uploads/2022/09/BOTAS-BEIGE-MUJER-LOIS-JEANS-85771-1.jpg' },
  { id: '4' ,categoria: 'calzado', name: "Zapatillas",   price: 37, descripcion: 'Producto realizado con cuero vacuno', foto:'https://brunosmoda.com/wp-content/uploads/2022/09/ZAPATILLAS-NEGRAS-Y-ROSAS-CHICA-MUJER-10046804_000-4.jpg' },
  { id: '5' ,categoria: 'accesorios', name: "Cartera",  price: 27,descripcion: 'Producto realizado con cuero vacuno', foto:'https://brunosmoda.com/wp-content/uploads/2019/08/10029645_558_2.jpg' },
  { id: '6' ,categoria: 'accesorios', name: "Cinturón",    price: 40, descripcion: 'Producto realizado con cuero vacuno',foto:'https://brunosmoda.com/wp-content/uploads/2022/09/CINTURON-ELASTICO-TRENZADO-MARRON-MULTICOLOR-HOMBRE-11310-1.jpg' }
] 

export const gFetch = () => {
  return new Promise((res,rej)=>{    
    setTimeout(()=>{
      res(productos)
    }, 1000) 
 })

} 

