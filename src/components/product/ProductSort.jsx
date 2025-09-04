import { useState } from "react";
import {
  FaSortAlphaDown,
  FaSortAlphaUp,
  FaSortAmountDownAlt,
  FaSortAmountUpAlt,
} from "react-icons/fa";
import { MdSort } from "react-icons/md";
import { useDispatch } from "react-redux";
import { sortProductBy } from "../../store/slice/productSlice";
import { LuRefreshCw } from "react-icons/lu";

function ProductSort() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleSort = () => {
    setIsOpen((prev) => !prev);
  };

  const applySort = (type) => {
    dispatch(sortProductBy(type));
    setIsOpen(true);
  };
  return (
    <div
      onClick={handleSort}
      className="relative z-10 flex cursor-pointer items-center space-x-6 rounded-md bg-[#FF6F00] py-2 pl-4 text-[18px] text-white"
    >
      <span
        className={`text-2xl transition-transform duration-500 ease-in-out ${isOpen && "scale-120"}`}
      >
        <MdSort />
      </span>
      <span>Sort</span>
      <ul
        className={`absolute top-10 left-0 w-full bg-amber-200 py-1 pl-5 text-[16px] text-gray-800 transition-all duration-500 ease-in-out ${isOpen ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[-100px] opacity-0"}`}
      >
        <li
          onClick={() => applySort("priceLowToHigh")}
          className="flex items-center space-x-3 hover:font-bold hover:underline"
        >
          <span>Price</span>{" "}
          <span>
            <FaSortAmountDownAlt />
          </span>
        </li>
        <li
          onClick={() => applySort("priceHighToLow")}
          className="flex items-center space-x-3 hover:font-bold hover:underline"
        >
          <span>Price</span>{" "}
          <span>
            <FaSortAmountUpAlt />
          </span>
        </li>
        <li
          onClick={() => applySort("NameAToZ")}
          className="flex items-center space-x-3 hover:font-bold hover:underline"
        >
          <span>Name</span>{" "}
          <span>
            <FaSortAlphaDown />
          </span>
        </li>
        <li
          onClick={() => applySort("NameZToA")}
          className="flex items-center space-x-3 hover:font-bold hover:underline"
        >
          <span>Name</span>{" "}
          <span>
            <FaSortAlphaUp />
          </span>
        </li>
        <li
          onClick={() => applySort("")}
          className="flex items-center space-x-3 hover:font-bold hover:underline"
        >
          <span>Clear</span>{" "}
          <span>
            <LuRefreshCw />
          </span>
        </li>
      </ul>
    </div>
  );
}

export default ProductSort;
