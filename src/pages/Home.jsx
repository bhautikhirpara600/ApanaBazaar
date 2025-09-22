import { useSelector } from "react-redux";
import {
  Offers,
  ProductList,
  ScrollToTopButton,
  ProductNavigator,
  Loader,
} from "../components";
import { useEffect, useState } from "react";

function Home() {
  const [showBtn, setShowBtn] = useState(false);
  const SCROLL_THRESHOLD = 1000;

  useEffect(() => {
    const handleScroll = () => {
      setShowBtn(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { isLoading, error } = useSelector((state) => state.products);
  const { loading: myLoading } = useSelector((state) => state.emailAuth);
  if (isLoading || myLoading) {
    return <Loader />;
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
      <ProductNavigator />
      <ProductList />
      {showBtn && (
        <ScrollToTopButton
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      )}
    </main>
  );
}

export default Home;
