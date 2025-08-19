function Offers({ discount }) {
  return (
    <section className="bg-[#FF6F00]">
      <div className="mx-auto flex h-60 max-w-[1536px] items-center justify-center text-white">
        <div className="flex h-full flex-col items-center justify-evenly">
          <h1 className="media550:text-4xl text-center text-3xl font-bold">
            Festive Deals – Upto {discount}% OFF!
          </h1>
          <button className="cursor-pointer rounded-lg bg-[#43A047] px-6 py-3 font-semibold">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Offers;
