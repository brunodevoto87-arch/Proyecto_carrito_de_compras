import {useState} from "react"

function ProductCard({producto, addToCart}){
    const [cantidad, setCantidad]=useState(1)
    const aumentar = () => setCantidad(cantidad +1)
    const disminuir = () =>{
        if (cantidad > 1) setCantidad(cantidad -1)
    }
    return(
        <div className="producto-card">
            <img src={producto.image} alt={producto.title} />
            <h3>{producto.title}</h3>
            <p className="precio">${producto.price}</p>

            <div className="cantidad-control">
                <button onClick={disminuir}>-</button>
                <input 
                    type="number"
                    value={cantidad}
                    onChange={(e)=> setCantidad(Number(e.target.value))}
                    min="1" 
                />
                <button onClick={aumentar}>+</button>
            </div>
            <button className="btn-agregar" onClick={()=> addToCart(producto,cantidad)}>Agregar al Carrito</button>
        </div>    
    )
}
export default ProductCard