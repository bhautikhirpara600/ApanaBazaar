function Offers({ discount }) {
    return (
        <section className="bg-[#FF6F00]">
            <div className="h-60 text-white flex items-center justify-center max-w-[1536px] mx-auto ">
                <div className="h-full flex flex-col items-center justify-evenly">
                    <h1 className="text-3xl media550:text-4xl font-bold text-center">Festive Deals – Upto {discount}% OFF!</h1>
                    <button className="px-6 py-3 bg-[#43A047] cursor-pointer rounded-lg font-semibold">Shop Now</button>
                </div>
            </div>
        </section>
    )
}

export default Offers