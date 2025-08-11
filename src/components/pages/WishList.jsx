import { useSelector } from "react-redux";
import { finalWishListSelector } from "../../store/slice/wishListSlice";
import EmptyWishList from "../EmptyWishList";
import FinalWishList from "../FinalWishList";

function WishList() {
  const finalWishListData = useSelector(finalWishListSelector);

  return (
    <section className="mx-auto max-w-[1536px]">
      <div className="mx-[20px] my-10 rounded-lg bg-white px-2 py-4 text-[#0D1B2A] shadow-lg md:px-4 lg:mx-[85px] lg:p-6">
        {finalWishListData.length === 0 ? <EmptyWishList /> : <FinalWishList />}
      </div>
    </section>
  );
}

export default WishList;
