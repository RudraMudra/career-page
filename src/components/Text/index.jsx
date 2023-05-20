import React from "react";

const variantClasses = {
  h1: "font-medium sm:text-4xl md:text-[38px] text-[40px]",
  h2: "font-semibold text-4xl sm:text-[32px] md:text-[34px]",
  h3: "font-medium md:text-2xl sm:text-[22px] text-[26px]",
  h4: "text-2xl md:text-[22px] sm:text-xl",
  h5: "font-medium text-[22px] sm:text-lg md:text-xl",
  h6: "font-normal text-xl",
  body1: "font-medium text-lg",
  body2: "text-base",
  body3: "text-sm",
};

const Text = ({ children, className = "", variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
