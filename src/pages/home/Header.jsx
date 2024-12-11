
const Header = ({username = "Nerds"}) => {
  return (
    <div className="flex flex-col ">
      <h1 className="text-3xl font-bold">Welcome, <span className="text-cyan-700">{username}</span></h1>
      <p className="text-[#6B7280] text-lg">
        Good Morning!
      </p>
    </div>
  )
}

export default Header
