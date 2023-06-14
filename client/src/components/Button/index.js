import classNames from "classnames";

const VARIANTS = {
  SOLID: "SOLID",
  OUTLINE: "OUTLINE",
  GHOST: "GHOST",
};

const SIZES = {
  MEDIUM: "MEDIUM",
  LARGE: "LARGE",
};

function Button({
  children,
  iconLeft,
  iconRight,
  variant,
  onClick,
  isFluid,
  size = SIZES.MEDIUM,
}) {
  return (
    <button
      className={classNames(
        "flex flex-row justify-center items-center gap-x-2 h-10 whitespace-nowrap text-base font-semibold rounded-lg cursor-pointer",
        {
          "text-white bg-blue-600 px-4": variant === VARIANTS.SOLID,
          "border-blue-600 border text-blue-600 bg-white px-4":
            variant === VARIANTS.OUTLINE,
          "bg-transparent text-blue-600": variant === VARIANTS.GHOST,
          "w-full": isFluid,
          "h-10": size === SIZES.MEDIUM,
          "h-12": size === SIZES.LARGE,
        }
      )}
      onClick={onClick}
    >
      {iconLeft ? <span>{iconLeft}</span> : null}
      {children}
      {iconRight ? <span>{iconRight}</span> : null}
    </button>
  );
}

Button.VARIANTS = VARIANTS;
Button.SIZES = SIZES;

export { Button };
