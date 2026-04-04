

function Navbar() {
  return (
    <div className="py-4 px-8 bg-cyan-700 flex items-center justify-between">
        <h2 className="text-xl font-bold">PowerX</h2>
        <div className='flex gap-20'>
            <a className="text-lg font-bold" href="/">Home</a>
            <a className="text-lg font-bold" href="/about">About</a>
            <a className="text-lg font-bold" href="/product">Product</a>
        </div>
    </div>
  );
}

export default Navbar;