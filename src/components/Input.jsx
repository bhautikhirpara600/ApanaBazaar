import React from "react";

function Input({ type = "text", className = "", onChange, ...props }) {
  return (
    <input
      onChange={onChange}
      type={type}
      className={`${className} w-full rounded-sm border border-[#ccc] py-3 pl-3`}
      {...props}
    />
  );
}

export default Input;
