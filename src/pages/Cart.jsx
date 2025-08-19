import { useSelector } from "react-redux";
import { EmptyCart, FinalCart } from "../components";
import { finalCartDataSelector } from "../store/slice/cartSlice";

function Cart() {
  const cartData = useSelector(finalCartDataSelector);

  return (
    <section className="mx-auto min-h-[calc(100vh-236px)] max-w-[1536px]">
      <div className="mx-[8px] my-10 rounded-lg bg-white px-2 py-4 text-[#0D1B2A] shadow-lg md:mx-[20px] md:px-4 lg:mx-[85px] lg:p-6">
        {cartData.length === 0 ? <EmptyCart /> : <FinalCart />}
      </div>
    </section>
  );
}

export default Cart;
