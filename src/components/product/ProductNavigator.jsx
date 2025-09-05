import ProductSort from "./ProductSort";
import SearchBar from "./SearchBar";

function ProductNavigator() {
  return (
    <section className="media550:px-20 big:max-w-[1536px] media900:space-y-0 mx-auto flex flex-wrap items-center justify-end media900:justify-between space-y-8 px-4 py-8">
      <SearchBar />
      <ProductSort />
    </section>
  );
}

export default ProductNavigator;
