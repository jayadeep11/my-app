import { useUser } from "@clerk/clerk-react"
import { useState } from "react"

const Header = () => {
  const {user} = useUser()


  return (
    <div className="flex flex-col ">
      <h1 className="text-3xl font-bold">Welcome, <span className="text-cyan-950">{user?.fullName}</span></h1>
      <p className="text-[#6B7280] text-lg">
        Good Morning!
      </p>
    </div>
  )
}

export default Header
