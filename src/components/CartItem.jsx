import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeCartItem,
} from "../store/slice/cartSlice";
import { convertToINR } from "../store/slice/productSlice";

function CartItem({
  productId,
  imageUrl,
  title,
  brand,
  rating,
  price,
  quantity,
}) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex items-center justify-between border-b-1 border-b-[#ddd] py-2 font-semibold md:py-0">
        <div className="flex w-full max-w-125 flex-col items-center md:flex-row">
          <div className="size-25 md:size-40">
            <img className="w-full" src={imageUrl} alt={`${title} Image`} />
          </div>
          <div>
            <p className="text-center text-[14px] md:text-start md:text-lg">
              {title}
            </p>
            <div className="hidden text-lg md:block">
              {brand ? (
                <p>
                  <span>Brand:</span> <span>{brand}</span>
                </p>
              ) : (
                ""
              )}
              <p>
                <span>Rating:</span> <span>{rating}</span>
              </p>
            </div>
          </div>
        </div>
        <p className="w-full max-w-fit text-center md:max-w-25 md:text-lg">
          ₹{convertToINR(price)}
        </p>
        <div className="flex w-full max-w-20 flex-col items-center justify-center text-lg md:max-w-50 md:flex-row md:text-2xl">
          <button
            onClick={() => dispatch(decrementQuantity({ productId }))}
            className="btn-animation cursor-pointer rounded-sm bg-[#FF6F00] px-[10px] text-white hover:bg-[#E65F00] md:px-3 md:pb-1"
          >
            -
          </button>

          <span className="mx-4">{quantity}</span>

          <button
            onClick={() => dispatch(incrementQuantity({ productId }))}
            className="btn-animation cursor-pointer rounded-sm bg-[#FF6F00] px-2 text-white hover:bg-[#E65F00] md:pb-1"
          >
            +
          </button>

          <button
            onClick={() => dispatch(removeCartItem({ productId }))}
            className="btn-animation mt-4 cursor-pointer rounded-sm bg-red-500 px-[6px] py-[6px] text-white hover:bg-red-600 md:mt-0 md:ml-5 md:px-2"
          >
            <MdDeleteOutline />
          </button>
        </div>
        <p className="w-full max-w-fit text-center md:max-w-25 md:text-lg">
          ₹{convertToINR(price * quantity)}
        </p>
      </div>
    </>
  );
}

export default CartItem;
