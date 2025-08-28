import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/slice/productSlice";

function SearchBar() {
  const dispatch = useDispatch()
  const [userInput, setUserInput] = useState("");
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && userInput !== "") {
      dispatch(fetchProducts(userInput))
      setUserInput("");
    }
  };

  const handleClick = () => {
    if (userInput !== "") {
      dispatch(fetchProducts(userInput))
      setUserInput("");
    }
  };

  return (
    <div className="mt-4 ml-10 flex w-[300px] rounded-md border-2 border-[#FF6F00] bg-white">
      <input
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full rounded-md border-none bg-[#FFF8E1] pl-2 outline-none"
        type="text"
        placeholder="Search for mobile..."
      />
      <span
        onClick={handleClick}
        className="flex h-10 cursor-pointer items-center bg-[#FF6F00] px-2 text-[#FFF8E1]"
      >
        <RiSearchLine />
      </span>
    </div>
  );
}

export default SearchBar;
