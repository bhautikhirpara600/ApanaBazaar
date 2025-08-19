import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import {
  finalCartDataSelector,
  totalPriceSelector,
} from "../../store/slice/cartSlice";

function FinalCart() {
  const cartData = useSelector(finalCartDataSelector);
  const totalPrice = useSelector(totalPriceSelector);

  return (
    <>
      <h2 className="text-center text-2xl font-semibold md:text-3xl">
        Your Cart Summary
      </h2>
      <div className="flex items-center justify-between border-b-1 border-b-[#ddd] pt-8 pb-2 text-center font-semibold md:text-xl">
        <h3 className="w-full max-w-125">Item</h3>
        <h3 className="w-full max-w-fit md:max-w-25">Price</h3>
        <h3 className="w-full max-w-20 md:max-w-50">Quantity</h3>
        <h3 className="w-full max-w-fit md:max-w-25">Total</h3>
      </div>
      {cartData.map(({ id, images, title, brand, rating, price, quantity }) => (
        <CartItem
          key={id}
          productId={id}
          imageUrl={images[0]}
          title={title}
          brand={brand}
          rating={rating}
          price={price}
          quantity={quantity}
        />
      ))}
      <div className="flex flex-col items-end text-end font-semibold md:text-center md:text-lg">
        <p className="w-full max-w-25 pt-4">₹{totalPrice}</p>
        <Link
          className="mt-4 w-fit rounded-lg bg-[#43A047] px-4 py-2 font-semibold text-white"
          to="/"
        >
          Proceed to Checkout
        </Link>
      </div>
    </>
  );
}

export default FinalCart;
