import { useState } from 'react'
import productData from '../products'
import { MdDeleteOutline } from "react-icons/md";

function CartItem() {
    const [cart, setCart] = useState(productData.products[0])
    // console.log(cart);
    return (
        <div>
            
        <div className='flex items-center justify-between font-semibold border-b-1 py-2 md:py-0 border-b-[#ddd]'>
            <div className='flex items-center flex-col md:flex-row w-full max-w-125'>
                <div className='size-25 md:size-40'><img className='w-full' src={cart.images} alt="" /></div>
                <div>
                    <p className='text-[14px] md:text-[16px] text-center md:text-start'>{cart.title}</p>
                    <div className='hidden md:block'>
                        <p><span>Brand:</span> <span>{cart.brand}</span></p>
                        <p><span>Rating:</span> <span>{cart.rating}</span></p>
                    </div>
                </div>
            </div>
            <p className='md:text-lg w-full max-w-fit md:max-w-25 text-center'>₹{Math.ceil(cart.price * 90)}</p>
            <div className='text-lg md:text-2xl flex items-center justify-center flex-col md:flex-row w-full max-w-20 md:max-w-50'>
                <button className='px-2 md:pb-1 bg-[#FF6F00] rounded-sm text-white cursor-pointer'>+</button>
                <span className='mx-4'>2</span>
                <button className='px-[10px] md:px-3 md:pb-1 bg-[#FF6F00] rounded-sm text-white cursor-pointer'>-</button>
                <button className='px-[6px] md:px-2 py-[6px] mt-4 md:mt-0 md:ml-5 bg-red-600 rounded-sm text-white cursor-pointer'><MdDeleteOutline /></button>
            </div>
            <p className='md:text-lg w-full max-w-fit md:max-w-25 text-center'>₹{Math.ceil(cart.price * 90 * 2)}</p>
        </div>

        <div className='flex items-center justify-between font-semibold border-b-1 py-2 md:py-0 border-b-[#ddd]'>
            <div className='flex items-center flex-col md:flex-row w-full max-w-125'>
                <div className='size-25 md:size-40'><img className='w-full' src={cart.images} alt="" /></div>
                <div>
                    <p className='text-[14px] md:text-[16px] text-center md:text-start'>{cart.title}</p>
                    <div className='hidden md:block'>
                        <p><span>Brand:</span> <span>{cart.brand}</span></p>
                        <p><span>Rating:</span> <span>{cart.rating}</span></p>
                    </div>
                </div>
            </div>
            <p className='md:text-lg w-full max-w-fit md:max-w-25 text-center'>₹{Math.ceil(cart.price * 90)}</p>
            <div className='text-lg md:text-2xl flex items-center justify-center flex-col md:flex-row w-full max-w-20 md:max-w-50'>
                <button className='px-2 md:pb-1 bg-[#FF6F00] rounded-sm text-white cursor-pointer'>+</button>
                <span className='mx-4'>2</span>
                <button className='px-[10px] md:px-3 md:pb-1 bg-[#FF6F00] rounded-sm text-white cursor-pointer'>-</button>
                <button className='px-[6px] md:px-2 py-[6px] mt-4 md:mt-0 md:ml-5 bg-red-600 rounded-sm text-white cursor-pointer'><MdDeleteOutline /></button>
            </div>
            <p className='md:text-lg w-full max-w-fit md:max-w-25 text-center'>₹{Math.ceil(cart.price * 90 * 2)}</p>
        </div>

        <div className='flex items-center justify-between font-semibold border-b-1 py-2 md:py-0 border-b-[#ddd]'>
            <div className='flex items-center flex-col md:flex-row w-full max-w-125'>
                <div className='size-25 md:size-40'><img className='w-full' src={cart.images} alt="" /></div>
                <div>
                    <p className='text-[14px] md:text-[16px] text-center md:text-start'>{cart.title}</p>
                    <div className='hidden md:block'>
                        <p><span>Brand:</span> <span>{cart.brand}</span></p>
                        <p><span>Rating:</span> <span>{cart.rating}</span></p>
                    </div>
                </div>
            </div>
            <p className='md:text-lg w-full max-w-fit md:max-w-25 text-center'>₹{Math.ceil(cart.price * 90)}</p>
            <div className='text-lg md:text-2xl flex items-center justify-center flex-col md:flex-row w-full max-w-20 md:max-w-50'>
                <button className='px-2 md:pb-1 bg-[#FF6F00] rounded-sm text-white cursor-pointer'>+</button>
                <span className='mx-4'>2</span>
                <button className='px-[10px] md:px-3 md:pb-1 bg-[#FF6F00] rounded-sm text-white cursor-pointer'>-</button>
                <button className='px-[6px] md:px-2 py-[6px] mt-4 md:mt-0 md:ml-5 bg-red-600 rounded-sm text-white cursor-pointer'><MdDeleteOutline /></button>
            </div>
            <p className='md:text-lg w-full max-w-fit md:max-w-25 text-center'>₹{Math.ceil(cart.price * 90 * 2)}</p>
        </div>

        <div className='flex items-center justify-between font-semibold border-b-1 py-2 md:py-0 border-b-[#ddd]'>
            <div className='flex items-center flex-col md:flex-row w-full max-w-125'>
                <div className='size-25 md:size-40'><img className='w-full' src={cart.images} alt="" /></div>
                <div>
                    <p className='text-[14px] md:text-[16px] text-center md:text-start'>{cart.title}</p>
                    <div className='hidden md:block'>
                        <p><span>Brand:</span> <span>{cart.brand}</span></p>
                        <p><span>Rating:</span> <span>{cart.rating}</span></p>
                    </div>
                </div>
            </div>
            <p className='md:text-lg w-full max-w-fit md:max-w-25 text-center'>₹{Math.ceil(cart.price * 90)}</p>
            <div className='text-lg md:text-2xl flex items-center justify-center flex-col md:flex-row w-full max-w-20 md:max-w-50'>
                <button className='px-2 md:pb-1 bg-[#FF6F00] rounded-sm text-white cursor-pointer'>+</button>
                <span className='mx-4'>2</span>
                <button className='px-[10px] md:px-3 md:pb-1 bg-[#FF6F00] rounded-sm text-white cursor-pointer'>-</button>
                <button className='px-[6px] md:px-2 py-[6px] mt-4 md:mt-0 md:ml-5 bg-red-600 rounded-sm text-white cursor-pointer'><MdDeleteOutline /></button>
            </div>
            <p className='md:text-lg w-full max-w-fit md:max-w-25 text-center'>₹{Math.ceil(cart.price * 90 * 2)}</p>
        </div>

        <div className='flex items-center justify-between font-semibold border-b-1 py-2 md:py-0 border-b-[#ddd]'>
            <div className='flex items-center flex-col md:flex-row w-full max-w-125'>
                <div className='size-25 md:size-40'><img className='w-full' src={cart.images} alt="" /></div>
                <div>
                    <p className='text-[14px] md:text-[16px] text-center md:text-start'>{cart.title}</p>
                    <div className='hidden md:block'>
                        <p><span>Brand:</span> <span>{cart.brand}</span></p>
                        <p><span>Rating:</span> <span>{cart.rating}</span></p>
                    </div>
                </div>
            </div>
            <p className='md:text-lg w-full max-w-fit md:max-w-25 text-center'>₹{Math.ceil(cart.price * 90)}</p>
            <div className='text-lg md:text-2xl flex items-center justify-center flex-col md:flex-row w-full max-w-20 md:max-w-50'>
                <button className='px-2 md:pb-1 bg-[#FF6F00] rounded-sm text-white cursor-pointer'>+</button>
                <span className='mx-4'>2</span>
                <button className='px-[10px] md:px-3 md:pb-1 bg-[#FF6F00] rounded-sm text-white cursor-pointer'>-</button>
                <button className='px-[6px] md:px-2 py-[6px] mt-4 md:mt-0 md:ml-5 bg-red-600 rounded-sm text-white cursor-pointer'><MdDeleteOutline /></button>
            </div>
            <p className='md:text-lg w-full max-w-fit md:max-w-25 text-center'>₹{Math.ceil(cart.price * 90 * 2)}</p>
        </div>

        <div className='flex items-center justify-between font-semibold border-b-1 py-2 md:py-0 border-b-[#ddd]'>
            <div className='flex items-center flex-col md:flex-row w-full max-w-125'>
                <div className='size-25 md:size-40'><img className='w-full' src={cart.images} alt="" /></div>
                <div>
                    <p className='text-[14px] md:text-[16px] text-center md:text-start'>{cart.title}</p>
                    <div className='hidden md:block'>
                        <p><span>Brand:</span> <span>{cart.brand}</span></p>
                        <p><span>Rating:</span> <span>{cart.rating}</span></p>
                    </div>
                </div>
            </div>
            <p className='md:text-lg w-full max-w-fit md:max-w-25 text-center'>₹{Math.ceil(cart.price * 90)}</p>
            <div className='text-lg md:text-2xl flex items-center justify-center flex-col md:flex-row w-full max-w-20 md:max-w-50'>
                <button className='px-2 md:pb-1 bg-[#FF6F00] rounded-sm text-white cursor-pointer'>+</button>
                <span className='mx-4'>2</span>
                <button className='px-[10px] md:px-3 md:pb-1 bg-[#FF6F00] rounded-sm text-white cursor-pointer'>-</button>
                <button className='px-[6px] md:px-2 py-[6px] mt-4 md:mt-0 md:ml-5 bg-red-600 rounded-sm text-white cursor-pointer'><MdDeleteOutline /></button>
            </div>
            <p className='md:text-lg w-full max-w-fit md:max-w-25 text-center'>₹{Math.ceil(cart.price * 90 * 2)}</p>
        </div>


        </div>
    )
}

export default CartItem