import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { removeWishListItem } from "../../store/slice/wishListSlice";
import { convertToINR } from "../../store/slice/productSlice";
import toast from "react-hot-toast";

function WishListItem({
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
      <div className="relative flex items-center justify-between border-b-1 border-b-[#ddd] py-2 font-semibold md:py-0">
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
          <span className="mx-4">{quantity}</span>
        </div>
        <p className="w-full max-w-fit text-center md:max-w-25 md:text-lg">
          ₹{convertToINR(price * quantity)}
        </p>
        <div
          onClick={() => {
            dispatch(removeWishListItem({ productId }));
            toast.error("Removed from Wishlist...");
          }}
          className="absolute top-2 right-2 cursor-pointer text-red-600"
        >
          <IoClose />
        </div>
      </div>
    </>
  );
}

export default WishListItem;
