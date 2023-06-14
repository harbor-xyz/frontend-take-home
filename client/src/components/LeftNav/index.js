import {
  FaArrowLeft,
  FaKey,
  FaPlus,
  FaUserPlus,
  FaRegCopy,
  FaRegStar,
} from "react-icons/fa";
import { LuTestTube2 } from "react-icons/lu";
import classNames from "classnames";

function LeftNavItem({
  children,
  iconLeft,
  iconRight,
  isCategoryItem,
  isSelected,
}) {
  return (
    <div
      className={classNames(
        " py-2 flex flex-row justify-between items-center rounded-md",
        {
          "px-0": isCategoryItem,
          "pl-9 pr-5": !isCategoryItem,
          "bg-gray-200 text-blue-600": isSelected,
        }
      )}
    >
      <div className="flex flex-row items-center gap-x-3">
        {iconLeft ? iconLeft : null}
        <div
          className={classNames("font-semibold", {
            "text-base": isCategoryItem,
          })}
        >
          {children}
        </div>
      </div>
      <div className="text-gray-400">{iconRight ? iconRight : null}</div>
    </div>
  );
}

function LeftNav() {
  return (
    <div className="bg-white border-r border-gray-300 text-sm min-h-screen">
      <div className="flex flex-row items-center gap-x-3 text-gray-500 py-2.5  border-b border-gray-300  px-4">
        <FaArrowLeft />
        <div className="font-semibold">Back to all projects</div>
      </div>
      <div className="p-4">
        <LeftNavItem iconLeft={<FaRegStar size={16} />} isCategoryItem>
          Acme frontend
        </LeftNavItem>
        <LeftNavItem
          iconLeft={<LuTestTube2 size={16} />}
          iconRight={<FaPlus />}
          isSelected
        >
          Testnets
        </LeftNavItem>
        <LeftNavItem iconLeft={<FaUserPlus size={16} />} iconRight={<FaPlus />}>
          Members
        </LeftNavItem>
        <LeftNavItem iconLeft={<FaKey size={16} />} iconRight={<FaRegCopy />}>
          Project key
        </LeftNavItem>
      </div>
    </div>
  );
}

export { LeftNav };
