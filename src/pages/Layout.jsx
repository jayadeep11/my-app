import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="flex flex-row h-screen  text-gray-300 bg-gradient-to-b from-[#001217] via-[#001217]  to-black backdrop-blur-lg bg-opacity-50">
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
