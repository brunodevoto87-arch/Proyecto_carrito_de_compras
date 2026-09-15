import {useState} from "react"
import {Link, Outlet} from "react-router-dom"
import './App.css'

function App() {
  const [cart, setCart] = useState([])
  const addToCart = (producto, cantidad) =>{
    setCart((cartAnterior) => {
      const existe = cartAnterior.find((item) => item.id === producto.id)

      if (existe){
        return cartAnterior.map((item)=>
          item.id === producto.id
            ? {...item, cantidad: item.cantidad + cantidad}
            : item
        )
      }

      return [...cartAnterior, {...producto, cantidad}]
    })
  }

   return (
    <div>
      <h1>Mi tienda</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/shop">Tienda</Link>
        <Link to="/cart">Carrito</Link>
      </nav>
      <main>
        <Outlet context={{ cart, addToCart, setCart}} />
      </main>
    </div>
   )
}
export default App
