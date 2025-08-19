import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../../store/slice/cartSlice";
import {
  addWishListItem,
  removeWishListItem,
  wishListSelector,
} from "../../store/slice/wishListSlice";
import { convertToINR } from "../../store/slice/productSlice";
import { Link } from "react-router-dom";

function Product({ productId, imageUrl, price, title, discountPercentage }) {
  const dispatch = useDispatch();
  const wishLists = useSelector(wishListSelector);
  const isWishListed = wishLists.some(
    (wishlist) => wishlist.productId === productId,
  );

  const wishListHandler = () =>
    isWishListed
      ? dispatch(removeWishListItem({ productId }))
      : dispatch(addWishListItem({ productId }));

  return (
    <div
      className="flex max-w-[345px] flex-col items-center justify-center rounded-xl bg-white p-4 shadow-xl transition-transform duration-800 hover:scale-105 hover:shadow-2xl"
    >
      <Link to={`/product-detail/${productId}`} className="max-w-[200px]">
        <img className="w-full" src={imageUrl} alt={`${title} Image`} />
      </Link>
      <p className="flex h-[56px] items-center text-center text-xl font-bold">
        {title}
      </p>
      <div className="mt-2 mb-3 flex w-full items-center justify-between px-4 font-semibold">
        <p>₹ {convertToINR(price)}</p>
        <p>{discountPercentage}% off</p>
      </div>
      <div className="flex w-full items-center justify-between">
        <button
          onClick={() => dispatch(addCartItem({ productId, quantity: 1 }))}
          className="btn-animation flex min-h-11 cursor-pointer items-center rounded-md bg-[#43A047] px-3 py-2 font-semibold text-white hover:bg-[#2e7d32]"
        >
          <span className="mr-2 text-xl">
            <IoCartOutline />
          </span>
          <span>Add to Cart</span>
        </button>

        <button
          onClick={wishListHandler}
          className="btn-animation flex cursor-pointer items-center rounded-md bg-[#43A047] px-3 py-2 font-semibold text-white hover:bg-[#2e7d32]"
        >
          <span className="mr-2 flex h-[28px] w-[28px] items-center justify-center text-xl">
            {isWishListed ? "❤️" : <FaRegHeart />}
          </span>
          <span>Wishlist</span>
        </button>
      </div>
    </div>
  );
}

export default Product;
