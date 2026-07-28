import { Outlet } from "react-router-dom"
import Banner from "../component/Banner"
import Navbar from "../component/Navbar"

const AppLayout = () => {
  return (
    <>
      <Banner />
      <Navbar />
      <main className=" min-h-screen">
         <Outlet />
      </main>
      <p> footer</p>
      <p>Cart Side bar</p>
    </>
  )
}

export default AppLayout