import CartItem from "./CartItem"

function Cart() {
    return (
        <>
            <section>
                <div className="bg-white text-[#0D1B2A] max-w-[1536px] mx-[8px] md:mx-[20px] lg:mx-[85px] my-10 shadow-lg rounded-lg px-2 md:px-4 py-4 lg:p-6">
                    <h2 className="text-2xl md:text-3xl text-center font-semibold">Your Cart Summary</h2>
                    <div className="border-b-1 border-b-[#ddd] flex items-center justify-between font-semibold md:text-xl text-center pb-2 pt-8">
                        <h3 className="w-full max-w-125">Item</h3>
                        <h3 className="w-full max-w-fit md:max-w-25">Price</h3>
                        <h3 className="w-full max-w-20 md:max-w-50">Quantity</h3>
                        <h3 className="w-full max-w-fit md:max-w-25">Total</h3>
                    </div>
                    <CartItem />
                    <div className="flex flex-col items-end font-semibold md:text-lg text-end md:text-center">
                        <p className="w-full max-w-25 pt-4">₹18526</p>
                        <a className="bg-[#43A047] w-fit text-white px-4 py-2 rounded-lg font-semibold mt-4" href="/">Proceed to Checkout</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart