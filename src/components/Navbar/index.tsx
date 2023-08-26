import styled from '@emotion/styled';
import BrandLogo from '../../icons/BrandLogo';
import ProjectsIcon from '../../icons/ProjectsIcon';
import DocsIcon from '../../icons/DocsIcon';
import CommandSheetIcon from '../../icons/CommandSheetIcon';
import { ReactElement } from 'react';
import KeyIcon from '../../icons/KeyIcon';
import UserIcon from '../../icons/UserIcon';
import ArrowDownIcon from '../../icons/ArrowDownIcon';
import Button from '../../ui/Button';
import { theme } from '../../styles/theme';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.color.grey222};
  padding: 5px 16px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
`;

const AccountInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Items = styled.div`
  display: flex;
  margin-left: 20px;
  gap: 12px;
`;

type ActionItems = {
  name: string;
  icon: ReactElement;
  link: string;
};
const actionItems: ActionItems[] = [
  {
    name: 'Projects',
    icon: <ProjectsIcon />,
    link: ''
  },
  {
    name: 'Docs',
    icon: <DocsIcon />,
    link: ''
  },
  {
    name: 'Command cheatsheet',
    icon: <CommandSheetIcon />,
    link: ''
  }
];

const Navbar = (): ReactElement => {
  return (
    <Container>
      <Actions>
        <BrandLogo />
        <Items>
          {actionItems.map((item) => {
            return <Button startIcon={item.icon}>{item.name}</Button>;
          })}
        </Items>
      </Actions>
      <AccountInfo>
        <Items>
          <Button startIcon={<KeyIcon />}>Your user key</Button>
          <Button startIcon={<UserIcon />} endIcon={<ArrowDownIcon />} size="large"></Button>
        </Items>
      </AccountInfo>
    </Container>
  );
};

export default Navbar;
