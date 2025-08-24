import { useSelector } from "react-redux";
import {
  convertToINR,
  productListSelector,
} from "../../store/slice/productSlice";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { IoCartOutline, IoStar } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const productListArr = useSelector(productListSelector);
  const productData = productListArr.find(
    (product) => product.id === Number(id),
  );

  const setImageArr = (ImageArr) => {
    return [0, 1, 2].map((el) => {
      if (!ImageArr) return [];
      if (ImageArr.length === 1) return ImageArr[0];
      if (ImageArr.length === 2) return el === 2 ? ImageArr[0] : ImageArr[el];
      return ImageArr[el];
    });
  };

  const mainImgRef = useRef();

  const productImages = useMemo(
    () => setImageArr(productData?.images),
    [productData],
  );

  const [selectedImg, setSelectedImg] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  const handleImageLoad = useCallback((index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  }, []);

  useEffect(() => {
    if (productImages.length > 0) {
      setSelectedImg(productImages[0]);
    }
  }, [productImages]);

  const [mainImageLoaded, setMainImageLoaded] = useState(false);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (mainImgRef.current) {
      mainImgRef.current.classList.remove("opacity-100");
      mainImgRef.current.classList.add("opacity-0");
      setMainImageLoaded(false);
    }
  }, [selectedImg]);

  const handleMainImageLoad = () => {
    if (mainImgRef.current) {
      mainImgRef.current.classList.remove("opacity-0");
      mainImgRef.current.classList.add("opacity-100");
      setMainImageLoaded(true);
    }
  };

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="mx-auto min-h-[calc(100vh-236px)] max-w-[1536px]">
      <div className="media550:mx-5 media720:mx-10 media550:px-8 mx-3 my-6 rounded-xl bg-white px-4 py-4">
        <h2 className="text-center text-2xl font-semibold md:text-3xl">
          Product Detail
        </h2>
        <div className="items-starts media1440:flex-row media1440:justify-evenly mt-8 flex flex-col">
          <div className="media720:flex-row flex flex-col-reverse justify-center">
            <div className="media720:block mt-8 flex justify-evenly space-y-8">
              {productImages.map((imageUrl, index) => (
                <div
                  key={index}
                  className="cursor-pointer border-2 border-transparent hover:border-orange-600"
                >
                  {!loadedImages[index] && (
                    <div className="media720:size-[100px] size-[70px] animate-pulse bg-gray-200" />
                  )}
                  <img
                    className={`media720:w-[100px] w-[70px] ${
                      loadedImages[index] ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => handleImageLoad(index)}
                    onClick={() => setSelectedImg(imageUrl)}
                    src={imageUrl}
                    alt={`${productData.title}-${index + 1}`}
                  />
                </div>
              ))}
            </div>
            <div className="media550:size-[400px] media720:size-[500px] relative mx-auto flex size-[320px] items-center justify-center">
              {!mainImageLoaded && (
                <p className="text-lg font-medium text-gray-500">
                  Loading Image...
                </p>
              )}
              <img
                className="absolute top-0 w-full max-w-[500px] transition-opacity duration-500 ease-in-out"
                ref={mainImgRef}
                src={selectedImg}
                alt="Product Image"
                onLoad={handleMainImageLoad}
              />
            </div>
          </div>

          <div className="media1440:m-0 mx-auto w-full max-w-[600px]">
            <p className="media720:text-2xl text-xl">{productData.title}</p>
            <p className="media720:text-xl my-4 text-[18px]">
              {productData.description}
            </p>
            <p className="media720:text-xl flex h-10 w-fit items-center justify-center rounded-full bg-green-700 px-6 text-[18px] text-white">
              {productData.availabilityStatus}
            </p>
            <div className="my-4 flex space-x-6">
              {productData.tags.map((tag) => (
                <p
                  key={tag}
                  className="media720:text-xl flex h-10 w-fit items-center justify-center rounded-full bg-orange-500 px-6 text-[18px] text-white"
                >
                  {tag}
                </p>
              ))}
            </div>
            <p className="flex items-center space-x-2">
              <span className="media720:text-xl align-bottom text-[18px]">
                {productData.rating}
              </span>
              {Array.from({ length: Math.round(productData.rating) }).map(
                (_, index) => (
                  <span key={index} className="media720:text-xl text-amber-600">
                    <IoStar />
                  </span>
                ),
              )}
            </p>
            <p className="media720:text-xl my-4 text-[18px]">
              {productData.discountPercentage}% off
            </p>
            <p className="media720:text-xl text-[18px]">
              ₹{convertToINR(productData.price)}
            </p>
            <div className="my-4 flex space-x-8">
              <button className="btn-animation flex min-h-11 cursor-pointer items-center rounded-md bg-[#43A047] px-3 py-2 font-semibold text-white hover:scale-105 hover:bg-[#2e7d32] hover:shadow-md">
                <span className="mr-2 text-xl">
                  <IoCartOutline />
                </span>
                <span>Add to Cart</span>
              </button>
              <button className="btn-animation flex min-h-11 cursor-pointer items-center rounded-md bg-red-500 px-3 py-2 font-semibold text-white hover:scale-105 hover:bg-red-600 hover:shadow-md">
                <span className="mr-2 text-xl">
                  <MdDeleteOutline />
                </span>
                <span>Remove</span>
              </button>
            </div>
            <button className="btn-animation flex min-h-11 w-[280px] cursor-pointer items-center justify-center rounded-md bg-orange-500 px-3 py-2 font-semibold text-white hover:scale-105 hover:bg-orange-600 hover:shadow-md">
              Get More Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
