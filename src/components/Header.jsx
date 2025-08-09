import { useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/slice/productSlice";
import { Link } from "react-router";

function Header() {

  const dispatch = useDispatch()
  const productData = useSelector(state => state.products.data)
  const cartData = useSelector(state => state.cartItem.cartData)

  const totalQuantity = cartData.reduce((acc, curr) => acc + curr.quantity, 0)

  useEffect(() => {
    if (productData.length === 0) {
      dispatch(fetchProducts())
    }
  }, [])

  return (
    <>
      <nav className='bg-black/85 backdrop-blur-lg sticky top-0 z-50'>
        <section className="flex items-center justify-between py-4 px-4 media550:px-8 mx-auto big:max-w-[1536px]">
          <div className='text-3xl font-bold flex items-center'>
            <p className='text-[#FF6F00]'>Apana</p><span className='text-[#fff]'>Bazaar</span>
          </div>
          <ul className='text-[#FFF8E1] flex items-center space-x-4 text-lg font-medium'>
            <li><Link to="/">Home</Link></li>
            <li className="text-2xl relative">
              <Link to="/cart"><FaCartPlus />
                { totalQuantity ? <span className="text-[12px] bg-red-500 text-center size-4 rounded-full absolute top-[-12px] right-0">{totalQuantity}</span> : "" }
              </Link>
            </li>
          </ul>
        </section>
      </nav>
    </>
  )
}

export default Header