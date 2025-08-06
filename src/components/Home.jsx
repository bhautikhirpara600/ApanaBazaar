import Offers from "./Offers"
import ProductList from "./ProductList"

function Home() {
    return (
        <>
            <Offers discount={70} />
            <ProductList />
        </>
    )
}

export default Home