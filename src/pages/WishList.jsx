import { useSelector } from "react-redux";
import { EmptyWishList, FinalWishList } from "../components";
import { finalWishListSelector } from "../store/slice/wishListSlice";

function WishList() {
  const finalWishListData = useSelector(finalWishListSelector);

  return (
    <section className="mx-auto max-w-[1536px] min-h-[calc(100vh-236px)]">
      <div className="mx-[20px] my-10 rounded-lg bg-white px-2 py-4 text-[#0D1B2A] shadow-lg md:px-4 lg:mx-[85px] lg:p-6">
        {finalWishListData.length === 0 ? <EmptyWishList /> : <FinalWishList />}
      </div>
    </section>
  );
}

export default WishList;
