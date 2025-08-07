import { IoCartOutline } from "react-icons/io5";

function Product({ imageUrl, price, title, discountPercentage }) {
    return (
        <div className="max-w-[345px] bg-white p-4 rounded-xl flex flex-col items-center justify-center shadow-xl">
            <div className="max-w-50">
                <img className="w-full" src={imageUrl} alt={`${title} Image`} />
            </div>
            <p className="font-bold text-xl text-center">{title}</p>
            <div className="w-full font-semibold flex items-center justify-between m-2 px-4">
                <p>₹ {Math.ceil(price * 90)}</p>
                <p>{discountPercentage}% off</p>
            </div>
            <div className="w-full flex items-center justify-between">
                <button className="px-4 py-2 bg-[#43A047] rounded-md font-semibold text-white flex items-center min-h-11">
                    <span className="text-xl mr-2"><IoCartOutline /></span><span>Add to Cart</span>
                </button>
                <button className="px-4 py-2 bg-[#43A047] rounded-md font-semibold text-white flex items-center">
                    <span className="text-xl mr-2">♡</span><span>Wishlist</span>
                </button>
            </div>
        </div>
    )
}

export default Product