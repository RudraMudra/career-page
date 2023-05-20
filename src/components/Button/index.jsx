import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder10: "rounded-[10px]",
  RoundedBorder20: "rounded-[20px]",
  CustomBorderLR10: "rounded-br-[10px] rounded-tr-[10px]",
};
const variants = {
  FillLightblueA700: "bg-light_blue_A700 text-white_A700",
  OutlineWhiteA700:
    "bg-teal_900 border border-solid border-white_A700 text-gray_100",
  icbFillBluegray50: "bg-blue_gray_50",
};
const sizes = { sm: "p-[7px]", md: "p-2.5", smIcn: "p-0.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder10",
    "RoundedBorder20",
    "CustomBorderLR10",
  ]),
  variant: PropTypes.oneOf([
    "FillLightblueA700",
    "OutlineWhiteA700",
    "icbFillBluegray50",
  ]),
  size: PropTypes.oneOf(["sm", "md", "smIcn"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
