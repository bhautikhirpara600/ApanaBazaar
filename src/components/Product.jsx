import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../store/slice/cartSlice";
import { addWishListItem, removeWishListItem } from "../store/slice/wishListSlice";

function Product({ productId, imageUrl, price, title, discountPercentage }) {

    const dispatch = useDispatch()
    const wishLists = useSelector(state => state.wishList.wishListData)
    const isWishListed = wishLists.some(wishlist => wishlist.productId === productId);

    const wishListHandler = () => isWishListed ? dispatch(removeWishListItem({ productId })) : dispatch(addWishListItem({ productId }))
    
    return (
        <div className="max-w-[345px] bg-white p-4 rounded-xl flex flex-col items-center justify-center shadow-xl">
            <div className="max-w-[200px]">
                <img className="w-full" src={imageUrl} alt={`${title} Image`} />
            </div>
            <p className="font-bold text-xl text-center h-[56px] flex items-center">{title}</p>
            <div className="w-full font-semibold flex items-center justify-between mt-2 mb-3 px-4">
                <p>₹ {Math.round(price * 90)}</p>
                <p>{discountPercentage}% off</p>
            </div>
            <div className="w-full flex items-center justify-between">

                <button onClick={() => dispatch(addCartItem({ productId, quantity: 1 }))} className="px-3 py-2 bg-[#43A047] rounded-md font-semibold text-white flex items-center min-h-11 cursor-pointer hover:bg-[#2e7d32] btn-animation">
                    <span className="text-xl mr-2"><IoCartOutline /></span><span>Add to Cart</span>
                </button>

                <button onClick={wishListHandler} className="px-3 py-2 bg-[#43A047] rounded-md font-semibold text-white flex items-center cursor-pointer hover:bg-[#2e7d32] btn-animation ">
                    <span className="text-xl mr-2 w-[28px] h-[28px] flex items-center justify-center">{isWishListed ? '❤️' : <FaRegHeart />}</span><span>Wishlist</span>
                </button>

            </div>
        </div>
    )
}

export default Product