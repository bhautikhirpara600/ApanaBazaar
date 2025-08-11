import { useSelector } from "react-redux";
import { finalCartDataSelector } from "../../store/slice/cartSlice";
import EmptyCart from "../EmptyCart";
import FinalCart from "../FinalCart";

function Cart() {
  const cartData = useSelector(finalCartDataSelector);

  return (
    <section className="mx-auto max-w-[1536px]">
      <div className="mx-[8px] my-10 rounded-lg bg-white px-2 py-4 text-[#0D1B2A] shadow-lg md:mx-[20px] md:px-4 lg:mx-[85px] lg:p-6">
        {cartData.length === 0 ? <EmptyCart /> : <FinalCart />}
      </div>
    </section>
  );
}

export default Cart;
