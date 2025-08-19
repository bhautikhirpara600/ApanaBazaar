import { Link } from "react-router-dom";

function EmptyWishList() {
  return (
    <>
      <div className="media550:max-w-100 mx-auto max-w-70">
        <img
          className="w-full"
          src="/empty-wishlist-image.png"
          alt="empty-wishlist-image"
        />
      </div>
      <Link
        className="mx-auto mb-2 block w-fit rounded-lg bg-orange-500 px-4 py-2 font-semibold text-white"
        to="/"
      >
        Add Items
      </Link>
    </>
  );
}

export default EmptyWishList;
