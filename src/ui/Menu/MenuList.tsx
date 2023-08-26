import React, { ReactElement, ReactNode } from "react";
import styled from "@emotion/styled";

interface MenuListProps {
  children: ReactNode[];
}

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MenuList = ({ children }: MenuListProps): ReactElement | null => {
  if (children?.length < 1) return null;

  return <Ul>{children.map((item) => item)}</Ul>;
};
