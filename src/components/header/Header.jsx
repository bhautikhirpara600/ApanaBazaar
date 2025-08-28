import { useEffect, useRef, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slice/productSlice";
import { Link } from "react-router-dom";
import {
  productDataSelector,
  totalQuantitySelector,
} from "../../store/slice/cartSlice";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef(null);

  const dispatch = useDispatch();
  const productData = useSelector(productDataSelector);
  const totalQuantity = useSelector(totalQuantitySelector);

  const handleLinkClick = () => setIsOpen(false)

  useEffect(() => {
    if (productData.length === 0) {
      dispatch(fetchProducts());
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-black/85 backdrop-blur-md">
        <section
          ref={dropDownRef}
          className="media550:px-8 big:max-w-[1536px] relative z-10 mx-auto flex items-center justify-between px-4 py-4"
        >
          <div className="flex items-center text-3xl font-bold">
            <p className="text-[#FF6F00]">Apana</p>
            <span className="text-[#fff]">Bazaar</span>
          </div>

          <input
            onChange={() => setIsOpen((prevState) => !prevState)}
            className="pointer-events-none absolute top-0 hidden"
            type="checkbox"
            id="hamburger-menu"
            checked={isOpen}
          />
          <label htmlFor="hamburger-menu" className="media550:hidden z-30">
            <div className="flex h-[19px] w-[25px] cursor-pointer flex-col justify-between">
              <span
                className={`h-[3px] rounded-[4px] bg-[#FFF8E1] transition-transform duration-300 ${isOpen ? "w-[20px] translate-x-[-3px] translate-y-[3px] rotate-45" : ""}`}
              ></span>

              <span
                className={`h-[3px] rounded-[4px] bg-[#FFF8E1] transition-transform duration-300 ${isOpen ? "opacity-0" : ""}`}
              ></span>

              <span
                className={`h-[3px] rounded-[4px] bg-[#FFF8E1] transition-transform duration-300 ${isOpen ? "w-[20px] translate-x-[-3px] -translate-y-[13px] -rotate-45" : ""}`}
              ></span>
            </div>
          </label>

          <div
            className={`transition-all duration-800 ease-in-out media550:right-0 right-4 ${isOpen ? "absolute top-[10px] rounded-sm bg-black/85 backdrop-blur-md opacity-100" : "media550:top-0 media550:relative absolute top-[-150px] opacity-0 media550:opacity-100 z-20"}`}
          >
            <ul className="media550:items-center media550:space-y-0 media550:flex-row media550:p-0 flex flex-col space-y-2 space-x-4 p-4 w-[155px] text-lg font-medium text-[#FFF8E1]">
              <li>
                <Link to="/" onClick={handleLinkClick}>Home</Link>
              </li>
              <li>
                <Link to="/wishlist" onClick={handleLinkClick}>Wishlist</Link>
              </li>
              <li className="relative text-2xl">
                <Link to="/cart" onClick={handleLinkClick}>
                  {
                    <>
                      {" "}
                      <span className="media550:block hidden">
                        <FaCartPlus />
                      </span>
                      <span className="media550:hidden block text-lg">
                        Cart
                      </span>{" "}
                    </>
                  }

                  {totalQuantity ? (
                    <span className="media550:top-[-12px] media550:right-0 absolute top-[6px] right-[65px] size-4 rounded-full bg-red-500 text-center text-[12px]">
                      {totalQuantity}
                    </span>
                  ) : (
                    ""
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </nav>
    </>
  );
}

export default Header;
