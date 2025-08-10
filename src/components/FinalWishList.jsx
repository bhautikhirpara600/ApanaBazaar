import { useSelector } from 'react-redux'
import { finalWishListSelector } from '../store/slice/wishListSlice'
import { Link } from 'react-router-dom'
import WishListItem from './WishListItem'

function FinalWishList() {

    const finalWishListData = useSelector(finalWishListSelector)
    const totalPrice = finalWishListData.map(wishList => Math.round(wishList.price * 90)).reduce((acc, curr) => acc + curr, 0)
    return (
        <>
            <h2 className="text-2xl md:text-3xl text-center font-semibold">Your Wish List</h2>
            <div className="border-b-1 border-b-[#ddd] flex items-center justify-between font-semibold md:text-xl text-center pb-2 pt-8">
                <h3 className="w-full max-w-125">Item</h3>
                <h3 className="w-full max-w-fit md:max-w-25">Price</h3>
                <h3 className="w-full max-w-20 md:max-w-50">Quantity</h3>
                <h3 className="w-full max-w-fit md:max-w-25">Total</h3>
            </div>
            {
                finalWishListData.map(({ id, images, title, brand, rating, price }) => (
                    <WishListItem
                        key={id}
                        productId={id}
                        imageUrl={images[0]}
                        title={title}
                        brand={brand}
                        rating={rating}
                        price={price}
                        quantity={1}
                    />
                ))
            }
            <div className="flex flex-col items-end font-semibold md:text-lg text-end md:text-center">
                <p className="w-full max-w-25 pt-4">₹{totalPrice}</p>
                <Link className="bg-[#43A047] w-fit text-white px-4 py-2 rounded-lg font-semibold mt-4" to="/">Proceed to Checkout</Link>
            </div>
        </>
    )
}

export default FinalWishList