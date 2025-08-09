import Product from "./Product"
import { useSelector } from "react-redux"

function ProductList() {
  const { data: productList } = useSelector(state => state.products)
  return (
    <section className="mb-16 max-w-[1536px] mx-auto">
      <h2 className="text-3xl media550:text-4xl font-bold text-center my-8">Top Deals</h2>
      <div className="grid grid-cols-[345px] media720:grid-cols-2 media1050:grid-cols-3 media1440:grid-cols-4 max-w-[1350px] gap-10 justify-center mx-[40px] xl:mx-[85px]">
        { productList.map(({ id, images, price, title, discountPercentage }) => (
          <Product 
            key={id} 
            productId={id}
            imageUrl={images[0]} 
            price={price}
            title={title}
            discountPercentage={discountPercentage}
          />
          ))
        }
      </div>
    </section>
  )
}

export default ProductList