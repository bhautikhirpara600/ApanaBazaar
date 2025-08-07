import { useSelector } from "react-redux"
import Offers from "./Offers"
import ProductList from "./ProductList"

function Home() {
    const { isLoading, error } = useSelector(state => state.products)
    if (isLoading) {
        return (
            <div className="h-screen flex items-start justify-center mt-20">
                <div className="flex items-center justify-center h-20 w-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
                </div>
            </div>
        )
    } else if (error) {
        return (
            <div className="h-screen flex items-start justify-center mt-20">
                <h1 className="text-3xl font-bold text-center">{error}</h1>
            </div>
        )
    }

    return (
        <main>
            <Offers discount={70} />
            <ProductList />
        </main>
    )
}

export default Home