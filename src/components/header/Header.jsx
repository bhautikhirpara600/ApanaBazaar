import { useEffect, useRef, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setHeading } from "../../store/slice/productSlice";
import { Link, useNavigate } from "react-router-dom";
import {
  productDataSelector,
  totalQuantitySelector,
} from "../../store/slice/cartSlice";
import { IoMdArrowDropdown } from "react-icons/io";
import { categoryList } from "../../constants/categoryLists";
import { appwriteGetUser, appwriteLogout } from "../../service/appwrite";
import {
  setAuthError,
  setAuthLoading,
  setIsLoggedIn,
} from "../../store/slice/authSlice";
import ButtonOrange from "../ButtonOrange";
import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const dropDownRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productData = useSelector(productDataSelector);
  const totalQuantity = useSelector(totalQuantitySelector);
  const { loading: myLoading, isLoggedIn: userLogged } = useSelector(
    (state) => state.emailAuth,
  );

  const handleLinkClick = () => setIsOpen(false);
  const handleSignin = () => navigate("/signin");
  const handleLogout = () => {
    const func = async () => {
      try {
        dispatch(setAuthLoading(true));
        await appwriteLogout();
        dispatch(setIsLoggedIn(false));
      } catch (error) {
        console.error("Header Comp Logout ::", error);
        dispatch(setAuthError(error?.message || "Something went wrong."));
      } finally {
        dispatch(setAuthLoading(false));
      }
    };

    func();
  };

  useEffect(() => {
    if (productData.length === 0) {
      dispatch(fetchProducts());
    }

    const func = async () => {
      try {
        dispatch(setAuthLoading(true));
        const result = await appwriteGetUser();
        if (result?.status) {
          dispatch(setIsLoggedIn(true));
        }
      } catch (error) {
        console.error("Header Comp ::", error);
        dispatch(setAuthError(error?.message || "Something went wrong."));
      } finally {
        dispatch(setAuthLoading(false));
      }
    };

    func();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setIsOpen(false);
        setIsCategoryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (myLoading) return null;

  return (
    <>
      <nav className="sticky top-0 z-50 bg-black/85 backdrop-blur-md">
        <section
          ref={dropDownRef}
          className="media720:px-8 big:max-w-[1536px] relative z-10 mx-auto flex items-center justify-between px-4 py-4"
        >
          <Logo />
          <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          <div
            className={`media720:right-0 right-4 transition-all duration-800 ease-in-out ${isOpen ? "absolute top-[10px] rounded-sm bg-black/85 opacity-100 backdrop-blur-md" : "media720:top-0 media720:relative media720:opacity-100 absolute top-[-150px] z-20 opacity-0"}`}
          >
            <ul className="media720:items-center media720:space-y-0 media720:flex-row media720:p-0 flex flex-col space-y-2 space-x-4 p-4 text-lg font-medium text-[#FFF8E1]">
              <li>
                <Link to="/" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>

              <li
                onClick={() => setIsCategoryOpen((prev) => !prev)}
                className="relative cursor-pointer"
              >
                <div className="flex items-center space-x-2">
                  <span>Category</span>
                  <span
                    className={`transition-transform duration-500 ease-in-out ${isCategoryOpen && "rotate-180"}`}
                  >
                    <IoMdArrowDropdown />
                  </span>
                </div>
                <ul
                  className={`scrollbar-thin scrollbar-thumb-amber-700 scrollbar-track-amber-300 absolute top-8 z-10 max-h-50 overflow-y-scroll bg-amber-200 py-2 text-gray-800 transition-all duration-500 ease-in-out ${isCategoryOpen ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[-100px] opacity-0"}`}
                >
                  {categoryList.map((item) => (
                    <li
                      className="px-2 hover:bg-amber-500"
                      onClick={() => {
                        dispatch(fetchProducts(item));
                        dispatch(setHeading(item));
                      }}
                      key={item}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <Link to="/wishlist" onClick={handleLinkClick}>
                  Wishlist
                </Link>
              </li>

              <li className="relative text-2xl">
                <Link to="/cart" onClick={handleLinkClick}>
                  {
                    <>
                      {" "}
                      <span className="media720:block hidden">
                        <FaCartPlus />
                      </span>
                      <span className="media720:hidden block text-lg">
                        Cart
                      </span>{" "}
                    </>
                  }

                  {totalQuantity ? (
                    <span className="media720:top-[-12px] media720:right-0 absolute top-[6px] right-[35px] size-4 rounded-full bg-red-500 text-center text-[12px]">
                      {totalQuantity}
                    </span>
                  ) : (
                    ""
                  )}
                </Link>
              </li>

              <li>
                {userLogged ? (
                  <ButtonOrange className="py-[6px]" onClick={handleLogout}>
                    Logout
                  </ButtonOrange>
                ) : (
                  <ButtonOrange className="py-[6px]" onClick={handleSignin}>
                    Sign in
                  </ButtonOrange>
                )}
              </li>
            </ul>
          </div>
        </section>
      </nav>
    </>
  );
}

export default Header;
