import {useState} from "react"
import {useOutletContext} from "react-router-dom"
function Cart(){
    const {cart, setCart} = useOutletContext()

    const [inputValues, setInputValues] = useState({})

    const total = cart.reduce((sum, item) => sum + item.price * item.cantidad, 0)

    const cambiarCantidad = (id, nuevaCantidad) =>{
        if (nuevaCantidad <= 0){
            setCart((cartAnterior) => cartAnterior.filter((item) => item.id !== id))
        }
        else{
            setCart((cartAnterior) => cartAnterior.map((item) =>
                item.id === id ? {...item, cantidad: nuevaCantidad} : item
            ))
        }
    }

    const eliminarItem = (id) =>{
        setCart((cartAnterior) => cartAnterior.filter((item)=> item.id !== id))
    }

    return(
        <div>
            <h1>Tu Carrito</h1>
            {cart.length === 0 ? (
                <p>El carrito esta vacio.</p>
            ):(
                <div>
                    {cart.map((item)=>(
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} width="80" />
                            <div>
                                <h3>{item.title}</h3>
                                <p>Precio: ${item.price}</p>
                                <p>Cantidad: {item.cantidad}</p>
                                <p>Subtotal: ${(item.price * item.cantidad).toFixed(2)}</p>
                                <div className="cantidad-control">
                                    <button onClick={()=> cambiarCantidad(item.id,item.cantidad -1)}>-</button>
                                    <input type="number"
                                    value={inputValues[item.id] ?? item.cantidad}
                                    onChange={(e) =>{
                                        setInputValues((valoresAnteriores) => ({
                                            ...valoresAnteriores,
                                            [item.id]: e.target.value
                                        }))
                                    }}
                                    onBlur={(e)=>{
                                        const nuevaCantidad = Number(e.target.value)
                                        if (nuevaCantidad >= 1){
                                            cambiarCantidad(item.id, nuevaCantidad)
                                        }
                                        setInputValues((valoresAnteriores) => ({
                                            ...valoresAnteriores,
                                            [item.id]: undefined
                                        }))
                                    }}
                                    min="1"
                                    />
                                    <button onClick={()=> cambiarCantidad(item.id, item.cantidad +1)}>+</button>
                                </div>
                                <button onClick={()=> eliminarItem(item.id)}>Eliminar</button>
                            </div>
                        </div>
                    ))}
                    <h2>Total: ${total.toFixed(2)}</h2>
                </div>
            )}
        </div>
    )
}
export default Cart