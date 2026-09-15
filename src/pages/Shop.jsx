import {useState, useEffect} from "react"
import {useOutletContext} from "react-router-dom"
import ProductCard from "../components/ProductCard"
function Shop(){
    const [productos, setProductos] = useState([])
    const {addToCart} = useOutletContext()

    useEffect(()=>{
        const fetchProductos = async()=>{
            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json()
            setProductos(data)
        }
        fetchProductos()
    }, [])
    return (
        <div>
            <h1>Tienda</h1>
            <div className="productos-container">
                {productos.map((producto) => (
                  <ProductCard key={producto.id} producto={producto} addToCart={addToCart}/>
                ))}
            </div>
        </div>
    )
}
export default Shop