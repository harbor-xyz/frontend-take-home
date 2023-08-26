import Paper from '../Paper';
import { Menu, MenuItem, MenuList } from '../Menu';
import { forwardRef, ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from '@emotion/styled';
import Label from './Label';
import Item from './Item';

const Container = styled.div`
  display: flex;
  padding-right: 0px;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const StyledPaper = styled(Paper)`
  position: absolute;
  margin-top: 28px;
  margin-right: 80px;
  width: 200px;
  padding: 8px;
  align-items: center;
  justify-content: center;
`;

export type Option = {
  label: string | ReactNode;
  id: string;
};

interface DropdownProps {
  options: Option[];
  label?: string;
  placeholder?: string;
  onClickOption?: (item: Option) => void;
  selectedOption?: Option;
}

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
  const { options, label, selectedOption: _selectedOption = null, onClickOption } = props;

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(_selectedOption);

  useEffect(() => {
    const captureWindowClick = (event: MouseEvent) => {
      if (dropdownRef?.current && !dropdownRef?.current?.contains(event?.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener('click', captureWindowClick);
    return () => {
      window.removeEventListener('click', captureWindowClick);
    };
  });

  const handleOnClick = () => {
    setOpen((prevState) => !prevState);
  };

  const handleItemOnClick = (item: Option) => {
    if (onClickOption) {
      onClickOption(item);
    }
    setSelectedOption(item);
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <Container ref={dropdownRef}>
        <Label label={label} selectedOption={selectedOption} handleOnClick={handleOnClick} />
        {open &&
          createPortal(
            <StyledPaper raised>
              <Menu {...props}>
                <MenuList>
                  {options.map((item) => {
                    return (
                      <MenuItem key={item.id} onClick={() => handleItemOnClick(item)}>
                        <Item label={item.label} />
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
            </StyledPaper>,
            dropdownRef?.current || document.body
          )}
      </Container>
    </>
  );
});

export default Dropdown;
