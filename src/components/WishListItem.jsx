import { IoClose } from "react-icons/io5"
import { useDispatch } from "react-redux"
import { removeWishListItem } from "../store/slice/wishListSlice"

function WishListItem({ productId, imageUrl, title, brand, rating, price, quantity }) {
    const dispatch = useDispatch()
    return (
        <>
            <div className='flex items-center justify-between font-semibold border-b-1 py-2 md:py-0 border-b-[#ddd] relative'>
                <div className='flex items-center flex-col md:flex-row w-full max-w-125'>
                    <div className='size-25 md:size-40'><img className='w-full' src={imageUrl} alt={`${title} Image`} /></div>
                    <div>
                        <p className='text-[14px] md:text-lg text-center md:text-start'>{title}</p>
                        <div className='hidden md:block text-lg'>
                            {brand ? <p><span>Brand:</span> <span>{brand}</span></p> : ""}
                            <p><span>Rating:</span> <span>{rating}</span></p>
                        </div>
                    </div>
                </div>
                <p className='md:text-lg w-full max-w-fit md:max-w-25 text-center'>₹{Math.round(price * 90)}</p>
                <div className='text-lg md:text-2xl flex items-center justify-center flex-col md:flex-row w-full max-w-20 md:max-w-50'>
                    <span className='mx-4'>{quantity}</span>
                </div>
                <p className='md:text-lg w-full max-w-fit md:max-w-25 text-center'>₹{Math.round(price * 90 * quantity)}</p>
                <div onClick={() => dispatch(removeWishListItem({productId}))} className="absolute right-2 top-2 cursor-pointer text-red-600"><IoClose /></div>
            </div>
        </>
    )
}

export default WishListItem