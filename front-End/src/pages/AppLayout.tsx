import { Outlet } from "react-router-dom"

const AppLayout = () => {
  return (
    <>
      <p> Banner</p>
      <p>NavBar</p>
      <main className=" min-h-screen">
         <Outlet />
      </main>
      <p> footer</p>
      <p>Cart Side bar</p>
    </>
  )
}

export default AppLayout