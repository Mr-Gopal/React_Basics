import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="py-4 px-8 bg-cyan-700 flex items-center justify-between">
        <h2 className="text-xl font-bold">PowerX</h2>
        <div className='flex gap-20'>
            <Link className="text-lg font-bold" to="/">Home</Link>
            <Link className="text-lg font-bold" to="/about">About</Link>
            <Link className="text-lg font-bold" to="/product">Product</Link>
        </div>
    </div>
  );
}

export default Navbar;