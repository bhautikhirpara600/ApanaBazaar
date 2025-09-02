import { productListSelector } from "../../store/slice/productSlice";
import Product from "./Product";
import { useSelector } from "react-redux";

function ProductList({ title }) {
  const productList = useSelector(productListSelector);
  return (
    <section className="mx-auto mb-16 max-w-[1536px]">
      <h2 className="media550:text-4xl my-8 text-center text-3xl font-bold">
        {title !== null && title !== "All" ? title : "Top Deals"}
      </h2>
      <div className="media720:grid-cols-2 media1050:grid-cols-3 media1440:grid-cols-4 mx-[40px] grid max-w-[1350px] grid-cols-[345px] justify-center gap-10 xl:mx-[85px]">
        {productList.map(({ id, images, price, title, discountPercentage }) => (
          <Product
            key={id}
            productId={id}
            imageUrl={images[0]}
            price={price}
            title={title}
            discountPercentage={discountPercentage}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
