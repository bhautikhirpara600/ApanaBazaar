function ButtonOrange({ onClick, className = "", children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`btn-animation cursor-pointer rounded-sm bg-orange-400 px-6 text-[18px] text-white hover:scale-105 hover:bg-orange-600 hover:shadow-md ${className}`}
    >
      {children}
    </button>
  );
}

export default ButtonOrange;
