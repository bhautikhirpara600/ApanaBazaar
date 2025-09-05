import { useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  finalHeadingSelector,
  setHeading,
} from "../../store/slice/productSlice";
import { IoChevronDown } from "react-icons/io5";
import { Typewriter } from "react-simple-typewriter";
import { searchBarCategories } from "../../constants/categoryLists";

function SearchBar() {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const productHeading = useSelector(finalHeadingSelector);
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleFunction = (userInput) => {
    dispatch(fetchProducts(userInput));
    dispatch(setHeading(userInput));
    setUserInput("");
  };

  const handleInputClick = () => {
    setIsTyping(true);
    inputRef.current.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && userInput !== "") {
      handleFunction(userInput);
    }
  };

  const handleSearchIcon = () => {
    if (userInput !== "") {
      handleFunction(userInput);
    }
  };

  const handleDropDown = () => {
    setIsOpen((prev) => !prev);
    setUserInput("");
  };

  const handleDropDownOption = (category) => {
    dispatch(fetchProducts(category === "All" ? "" : category.toLowerCase()));
    dispatch(setHeading(category === "All" ? "" : category));
    setIsOpen(false);
  };

  return (
    <div className="flex w-full max-w-[600px] rounded-md border-2 border-[#FF6F00] bg-white">
      <div className="relative flex cursor-pointer bg-[#FF6F00] text-white">
        <div
          onClick={handleDropDown}
          className="flex items-center space-x-2 pl-2"
        >
          <span>
            {searchBarCategories.includes(productHeading)
              ? productHeading
              : "All"}
          </span>
          <span
            className={`transition-transform duration-300 ease-in-out ${isOpen && "rotate-180"}`}
          >
            <IoChevronDown />
          </span>
        </div>
        <div
          className={`scrollbar-thin scrollbar-thumb-amber-700 scrollbar-track-amber-300 absolute top-10 left-0 flex max-h-25 flex-col overflow-y-auto bg-amber-200 py-1 text-gray-800 transition-all duration-500 ease-in-out ${isOpen ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[-100px] opacity-0"}`}
        >
          {searchBarCategories.map((category) => (
            <span
              key={category}
              className="pr-4 pl-2 hover:bg-amber-500"
              onClick={() => handleDropDownOption(category)}
            >
              {category}
            </span>
          ))}
        </div>
      </div>
      <div className="relative w-full bg-[#FFF8E1]">
        {!isTyping && (
          <div
            onClick={handleInputClick}
            className={`absolute mt-2 ml-2 pb-2 text-slate-800`}
          >
            <span className="">Search for </span>
            <span>
              <Typewriter
                words={["Phone", "Laptop", "Watch", "Shirt", "Shoes"]}
                loop={0}
                cursor
                typeSpeed={200}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </span>
          </div>
        )}
        <input
          value={userInput}
          name="search-bar"
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="h-full w-full border-none pl-2 outline-none"
          type="text"
          onBlur={() => setIsTyping(false)}
          onFocus={() => setIsTyping(true)}
          ref={inputRef}
        />
      </div>
      <span
        onClick={handleSearchIcon}
        className="flex h-10 cursor-pointer items-center bg-[#FF6F00] px-3 text-xl text-[#FFF8E1]"
      >
        <RiSearchLine />
      </span>
    </div>
  );
}

export default SearchBar;
