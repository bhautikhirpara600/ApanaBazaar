import { useSelector } from "react-redux";
import { Offers, ProductList, ScrollToTopButton, SearchBar } from "../components";
import { useEffect, useState } from "react";

function Home() {
  const [showBtn, setShowBtn] = useState(false)
  const SCROLL_THRESHOLD = 1000

  useEffect(() => {
    const handleScroll = () => {
      setShowBtn(window.scrollY > SCROLL_THRESHOLD)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const { isLoading, error } = useSelector((state) => state.products);
  if (isLoading) {
    return (
      <div className="mt-20 flex h-screen items-start justify-center">
        <div className="flex h-20 w-20 items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-t-4 border-b-4 border-blue-500"></div>
        </div>
      </div>
    );
  } else if (error) {
    return (
      <div className="mt-20 flex h-screen items-start justify-center">
        <h1 className="text-center text-3xl font-bold">{error}</h1>
      </div>
    );
  }

  return (
    <main className="min-h-[calc(100vh-236px)]">
      <Offers discount={70} />
      <SearchBar />
      <ProductList />
      {showBtn && <ScrollToTopButton onClick={() => window.scrollTo({ top:0, behavior: "smooth" })} />}
    </main>
  );
}

export default Home;
