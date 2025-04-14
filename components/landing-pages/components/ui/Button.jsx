import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  className = "",
}) => {
  const baseStyles =
    "rounded-lg font-medium active:opacity-50 transition duration-300 focus:outline-none";

  const variantStyles = {
    primary: "bg-g1 text-white",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    success: "bg-green-500 text-white hover:bg-green-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-gray-500 text-gray-500 hover:bg-gray-100",
  };

  const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-6 py-4 text-base rounded-[16px]",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
