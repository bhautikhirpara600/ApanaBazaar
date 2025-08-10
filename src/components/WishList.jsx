import { useSelector } from "react-redux"
import { finalWishListSelector } from "../store/slice/wishListSlice"
import EmptyWishList from "./EmptyWishList"
import FinalWishList from "./FinalWishList"

function WishList() {

    const finalWishListData = useSelector(finalWishListSelector)

    return (
        <section className="max-w-[1536px] mx-auto">
            <div className="bg-white text-[#0D1B2A] mx-[20px] lg:mx-[85px] my-10 shadow-lg rounded-lg px-2 md:px-4 py-4 lg:p-6">
                { finalWishListData.length === 0 ? <EmptyWishList /> : <FinalWishList /> }
            </div>
        </section>
    )
}

export default WishList