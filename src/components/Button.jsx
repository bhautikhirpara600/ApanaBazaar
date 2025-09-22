function Button({ children, className = "", ...props }) {
  return (
    <button
      type="submit"
      className={`btn-animation w-full cursor-pointer rounded-sm bg-[#43A047] py-3 text-[18px] text-white hover:scale-105 hover:bg-[#2e7d32] hover:shadow-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
