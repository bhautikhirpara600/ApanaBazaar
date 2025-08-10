import { Link } from "react-router-dom"

function EmptyWishList() {
  return (
    <>
        <div className="max-w-70 media550:max-w-100 mx-auto"><img className="w-full" src="/empty-wishlist-image.png" alt="empty-wishlist-image" /></div>
        <Link className="bg-orange-500 w-fit text-white px-4 py-2 rounded-lg font-semibold block mx-auto mb-2" to="/">Add Item</Link>
    </>
  )
}

export default EmptyWishList