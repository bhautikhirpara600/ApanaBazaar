import { useEffect, useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/slice/productSlice";
import { IoChevronDown } from "react-icons/io5";
import { Typewriter } from "react-simple-typewriter";

function SearchBar({ setTitle, title }) {
  const searchBarCategories = [
    "All",
    "Phone",
    "Laptop",
    "Charger",
    "Tablet",
    "Bike",
    "Watch",
    "Shoes",
    "Shirt",
    "Dress",
    "Earring",
    "Glasses",
    "Handbag",
  ];

  const inputRef = useRef();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleFunction = (userInput) => {
    dispatch(fetchProducts(userInput));
    setTitle(userInput);
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
    setTitle(category);
    setIsOpen(false);
  };

  return (
    <div className="mt-4 ml-10 flex w-[300px] rounded-md border-2 border-[#FF6F00] bg-white">
      <div className="relative flex cursor-pointer bg-[#FF6F00] text-[14px] text-white">
        <div
          onClick={handleDropDown}
          className="flex items-center space-x-2 pl-2"
        >
          <span>{title || "All"}</span>
          <span
            className={`transition-transform duration-300 ease-in-out ${isOpen && "rotate-180"}`}
          >
            <IoChevronDown />
          </span>
        </div>
        <div
          className={`scrollbar-thin scrollbar-thumb-amber-700 scrollbar-track-amber-300 absolute top-[41px] left-[-1px] flex max-h-25 flex-col overflow-y-auto bg-amber-200 py-1 pr-6 pl-2 text-gray-800 transition-all duration-500 ease-in-out ${isOpen ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[-100px] opacity-0"}`}
        >
          {searchBarCategories.map((category) => (
            <span
              key={category}
              className="hover:font-bold hover:underline"
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
        className="flex h-10 cursor-pointer items-center bg-[#FF6F00] px-2 text-[#FFF8E1]"
      >
        <RiSearchLine />
      </span>
    </div>
  );
}

export default SearchBar;