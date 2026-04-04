import { Link, Outlet } from 'react-router-dom'

function Product() {
  return (
    <div>
      <div className="flex justify-center gap-10 py-4">
        <Link className='text-xl font-semibold' to="/product/laptops">Laptops</Link>
        <Link className='text-xl font-semibold' to="/product/mobiles">Mobiles</Link>
      </div>
      

      <Outlet />
    </div>
  );
}

export default Product;