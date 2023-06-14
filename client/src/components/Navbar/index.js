import HarborLogo from "../../icons/HarborLogo.svg";
import {
  FaListUl,
  FaFile,
  FaTerminal,
  FaKey,
  FaUserCircle,
  FaChevronDown,
} from "react-icons/fa";

function NavItem({ children, icon }) {
  return (
    <div className="py-2 px-4 gap-x-2 text-sm font-medium flex flex-row items-center">
      {icon}
      <div>{children}</div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center bg-gray-900 py-3 px-4 text-gray-400">
      <div className="flex flex-row items-center gap-x-3">
        <div>
          <img src={HarborLogo} alt="Harbor logo" />
        </div>
        <NavItem icon={<FaListUl />}>Projects</NavItem>
        <NavItem icon={<FaFile />}>Docs</NavItem>
        <NavItem icon={<FaTerminal />}>Command cheatsheet</NavItem>
      </div>
      <div className="flex flex-row items-center gap-x-3">
        <NavItem icon={<FaKey />}>Your user key</NavItem>
        <NavItem icon={<FaUserCircle size={32} />}>
          <FaChevronDown />
        </NavItem>
      </div>
    </div>
  );
}

export { Navbar };
