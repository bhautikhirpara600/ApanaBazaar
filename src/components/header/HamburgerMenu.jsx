function HamburgerMenu({isOpen, setIsOpen}) {
  return (
    <>
      <input
        onChange={() => setIsOpen((prevState) => !prevState)}
        className="pointer-events-none absolute top-0 hidden"
        type="checkbox"
        id="hamburger-menu"
        checked={isOpen}
      />
      <label htmlFor="hamburger-menu" className="media720:hidden z-30">
        <div className="flex h-[19px] w-[25px] cursor-pointer flex-col justify-between">
          <span
            className={`h-[3px] rounded-[4px] bg-[#FFF8E1] transition-transform duration-300 ${isOpen ? "w-[20px] translate-x-[-3px] translate-y-[3px] rotate-45" : ""}`}
          ></span>

          <span
            className={`h-[3px] rounded-[4px] bg-[#FFF8E1] transition-transform duration-300 ${isOpen ? "opacity-0" : ""}`}
          ></span>

          <span
            className={`h-[3px] rounded-[4px] bg-[#FFF8E1] transition-transform duration-300 ${isOpen ? "w-[20px] translate-x-[-3px] -translate-y-[13px] -rotate-45" : ""}`}
          ></span>
        </div>
      </label>
    </>
  );
}

export default HamburgerMenu;
