import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity, removeCartItem } from "../store/slice/cartSlice";

function CartItem({ productId, imageUrl, title, brand, rating, price, quantity }) {
    const dispatch = useDispatch()
    return (
        <>
            <div className='flex items-center justify-between font-semibold border-b-1 py-2 md:py-0 border-b-[#ddd]'>
                <div className='flex items-center flex-col md:flex-row w-full max-w-125'>
                    <div className='size-25 md:size-40'><img className='w-full' src={imageUrl} alt={`${title} Image`} /></div>
                    <div>
                        <p className='text-[14px] md:text-lg text-center md:text-start'>{title}</p>
                        <div className='hidden md:block text-lg'>
                            <p><span>Brand:</span> <span>{brand}</span></p>
                            <p><span>Rating:</span> <span>{rating}</span></p>
                        </div>
                    </div>
                </div>
                <p className='md:text-lg w-full max-w-fit md:max-w-25 text-center'>₹{Math.round(price * 90)}</p>
                <div className='text-lg md:text-2xl flex items-center justify-center flex-col md:flex-row w-full max-w-20 md:max-w-50'>

                    <button onClick={() => dispatch(decrementQuantity({productId}))} className='px-[10px] md:px-3 md:pb-1 bg-[#FF6F00] rounded-sm text-white cursor-pointer hover:bg-[#E65F00] btn-animation'>-</button>

                    <span className='mx-4'>{quantity}</span>

                    <button onClick={() => dispatch(incrementQuantity({productId}))} className='px-2 md:pb-1 bg-[#FF6F00] rounded-sm text-white cursor-pointer hover:bg-[#E65F00] btn-animation'>+</button>

                    <button onClick={() => dispatch(removeCartItem({productId}))} className='px-[6px] md:px-2 py-[6px] mt-4 md:mt-0 md:ml-5 bg-red-500 hover:bg-red-600 btn-animation rounded-sm text-white cursor-pointer'><MdDeleteOutline /></button>

                </div>
                <p className='md:text-lg w-full max-w-fit md:max-w-25 text-center'>₹{Math.round(price * 90 * quantity)}</p>
            </div>
        </>
    )
}

export default CartItem