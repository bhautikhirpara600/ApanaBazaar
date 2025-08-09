import { Link } from "react-router";

function EmptyCart() {
    return (
        <>
            <h2 className="text-2xl md:text-3xl text-center font-semibold">Oops! Your cart is empty 😢</h2>
            <div className="max-w-100 mx-auto mt-10"><img className="w-full" src="/Empty-Cart--Streamline-Bruxelles.png" alt="Empty-cart-image" /></div>
            <Link className="bg-orange-500 w-fit text-white px-4 py-2 rounded-lg font-semibold block mx-auto mt-4" to="/">Let's Shopping</Link>
        </>
    )
}

export default EmptyCart