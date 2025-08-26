import { FaArrowUpLong } from "react-icons/fa6";

function ScrollToTopButton({ onClick }) {
  return (
      <button onClick={onClick} className="fixed right-2 bottom-5 border-2 border-orange-400 px-1 media550:p-2 rounded-full text-orange-400 hover:text-orange-600 hover:border-orange-600 cursor-pointer">
        <span className="text-[10px] media550:text-[16px]">Top</span>
        <span className="absolute right-1 media550:right-3 top-0 media550:top-1 animate-up">
          <FaArrowUpLong />
        </span>
      </button>
  );
}

export default ScrollToTopButton;
