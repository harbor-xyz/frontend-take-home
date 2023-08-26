import Paper from "../Paper";
import { Menu, MenuItem, MenuList } from "../Menu";
import { forwardRef } from "react";
import Text from "../Text";

interface DropdownProps {
  options: [];
  label?: string;
  onClickItem?: () => void;
}

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
  const { options, label, onClickItem } = props;
  return (
    <Paper ref={ref}>
      <>
        {label && <Text>{label}</Text>}
        <Menu {...props}>
          <MenuList>
            {options.map((item) => {
              return <MenuItem key={item.id} onClick={onClickItem}></MenuItem>;
            })}
          </MenuList>
        </Menu>
      </>
    </Paper>
  );
});

export default Dropdown;
