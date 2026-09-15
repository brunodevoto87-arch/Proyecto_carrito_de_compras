import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './App.jsx'
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: "shop", element: <Shop />},
      {path: "cart", element: <Cart />}, 
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
