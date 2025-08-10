import { useEffect, useRef, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/slice/productSlice";
import { Link } from "react-router-dom";

function Header() {

  const [isOpen, setIsOpen] = useState(false)
  const dropDownRef = useRef(null)

  const dispatch = useDispatch()
  const productData = useSelector(state => state.products.data)
  const cartData = useSelector(state => state.cartItem.cartData)

  const totalQuantity = cartData.reduce((acc, curr) => acc + curr.quantity, 0)

  useEffect(() => {
    if (productData.length === 0) {
      dispatch(fetchProducts())
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if(dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      <nav className='bg-black/85 backdrop-blur-md sticky top-0 z-50'>
        <section ref={dropDownRef} className="flex items-center justify-between py-4 px-4 media550:px-8 mx-auto big:max-w-[1536px] relative z-10">
          <div className='text-3xl font-bold flex items-center'>
            <p className='text-[#FF6F00]'>Apana</p><span className='text-[#fff]'>Bazaar</span>
          </div>

          <input onChange={() => setIsOpen(prevState => !prevState)} className="absolute top-0 hidden pointer-events-none" type="checkbox" id='hamburger-menu' checked={isOpen} />
          <label htmlFor="hamburger-menu" className="media550:hidden z-30">
            <div className="w-[25px] h-[19px] flex flex-col justify-between cursor-pointer">
              <span className={`h-[3px] rounded-[4px] bg-[#FFF8E1] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[13px] w-[20px] translate-x-[-3px]" : ""}`}></span>

              <span className={`h-[3px] rounded-[4px] bg-[#FFF8E1] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>

              <span className={`h-[3px] rounded-[4px] bg-[#FFF8E1] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[3px] w-[20px] translate-x-[-3px]" : ""}`}></span>
            </div>
          </label>

          <div className={`${isOpen ? "absolute top-[20px] bg-black/85 backdrop-blur-md rounded-xl right-4 transition-top duration-300 ease-in-out" : "absolute top-[-150px] media550:top-0 media550:relative z-20"}`}>
            <ul className='text-[#FFF8E1] flex media550:items-center space-y-2 media550:space-y-0 space-x-4 text-lg font-medium flex-col media550:flex-row p-4 media550:p-0'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/wishlist">Wishlist</Link></li>
              <li className="text-2xl relative">
                <Link to="/cart">
                  {<> <span className="hidden media550:block"><FaCartPlus /></span>
                    <span className="block media550:hidden text-lg">Cart</span> </>}

                  {totalQuantity ? <span className="text-[12px] bg-red-500 text-center size-4 rounded-full absolute top-[6px]   media550:top-[-12px] right-[25px] media550:right-0">{totalQuantity}</span> : ""}
                </Link>
              </li>
            </ul>
          </div>

        </section>
      </nav>
    </>
  )
}

export default Header