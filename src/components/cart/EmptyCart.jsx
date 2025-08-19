import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <>
      <h2 className="text-center text-2xl font-semibold md:text-3xl">
        Oops! Your cart is empty 😢
      </h2>
      <div className="mx-auto mt-10 max-w-100">
        <img
          className="w-full"
          src="/Empty-Cart--Streamline-Bruxelles.png"
          alt="Empty-cart-image"
        />
      </div>
      <Link
        className="mx-auto mt-4 block w-fit rounded-lg bg-orange-500 px-4 py-2 font-semibold text-white"
        to="/"
      >
        Let's Shopping
      </Link>
    </>
  );
}

export default EmptyCart;
