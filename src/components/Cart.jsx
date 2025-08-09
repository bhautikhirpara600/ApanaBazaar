import { useSelector } from "react-redux"
import { finalCartDataSelector } from "../store/slice/cartSlice";
import EmptyCart from "./EmptyCart";
import FinalCart from "./FinalCart";

function Cart() {

    const cartData = useSelector(finalCartDataSelector)

    return (
        <>
            <section className="bg-white text-[#0D1B2A] max-w-[1536px] mx-[8px] md:mx-[20px] lg:mx-[85px] my-10 shadow-lg rounded-lg px-2 md:px-4 py-4 lg:p-6">
                { cartData.length === 0 ? <EmptyCart /> : <FinalCart /> }
            </section>
        </>
    )
}

export default Cart