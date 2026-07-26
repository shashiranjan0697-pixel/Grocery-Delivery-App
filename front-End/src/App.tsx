import Login from "./pages/Login"
import { Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router-dom"
import AppLayout from "./pages/AppLayout"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductPage from "./pages/ProductPage"
import SerchReasultPage from "./pages/SerchReasultPage"
import FlashDeals from "./pages/FlashDeals"
import CheckOut from "./pages/CheckOut"
import MyOrder from "./pages/MyOrder"
import OrderTracking from "./pages/OrderTracking"
import Addresses from "./pages/Addresses"
import ProtectedRote from "./component/ProtectedRote"

const App = () => {
  return (
    <>
    <Toaster position="top-right" toastOptions={{duration:3000, style:{
     background:"#1B3022", color:"#fff", borderRadius:"12px", fontSize:"14px"
    }}}/>

    <Routes>

      <Route path="/login" element={<Login/>} />

      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />

        <Route path="products" element={<Products />} />

        <Route path="products/:id" element={<ProductPage />} />

        <Route path="serch" element={<SerchReasultPage />} />

        <Route path="deals" element={<FlashDeals />} />

      </Route>

      <Route element = {<ProtectedRote />}>
        <Route path="checkout" element={ <CheckOut />} />

        <Route path="orders" element={ <MyOrder />} />

        <Route path="orders/:id" element={ <OrderTracking />} />

        <Route path="addresses" element={ <Addresses />} />
      </Route>

    </Routes>

    </>
  )
}

export default App