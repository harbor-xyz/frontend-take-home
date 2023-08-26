import { MouseEvent, ReactElement, ReactNode, useContext, useState } from 'react';
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import ArrowBackIcon from '../../icons/ArrowBackIcon';
import Button from '../../ui/Button';
import Text from '../../ui/Text';
import StarIcon from '../../icons/StarIcon';
import TestnetsIcon from '../../icons/TestnetsIcon';
import MembersIcon from '../../icons/MembersIcon';
import ProjectsKeyIcon from '../../icons/ProjectsKeyIcon';
import PlusIcon from '../../icons/PlusIcon';
import CopyIcon from '../../icons/CopyIcon';
import { NavLink } from 'react-router-dom';
import Chip from '../../ui/Chip';
import { TestnetsContext } from '../../TestnetsProvider';

const Container = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  border: 1px solid ${theme.color.greyDDD};
  height: 100vh;
`;

const LinkBack = styled.div`
  display: flex;
  height: 44px;
  padding: 8px 12px 8px 20px;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
  gap: 12px;
`;

const Ul = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

const Li = styled.li`
  list-style: none;
  width: 100%;

  a {
    text-decoration: none;
  }
  button {
    padding-left: 36px;
  }
`;

const ItemsContainer = styled.div`
  display: flex;
  padding: 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
  border-top: 1px solid ${theme.color.greyDDD};
`;

const Heading = styled.div`
  display: flex;
  padding: 6px 20px 6px 8px;
  align-items: center;
  gap: 12px;
  align-self: stretch;
`;

const sideBarItems = [
  {
    name: 'Testnets',
    componentId: 8,
    startIcon: <TestnetsIcon />,
    endIcon: <PlusIcon />,
    id: 'testnet',
    link: '/testnets'
  },
  {
    name: 'Members',
    componentId: 1,
    startIcon: <MembersIcon />,
    endIcon: <PlusIcon />,
    id: 'members',
    link: '/'
  },
  {
    name: 'Project Key',
    componentId: 0,
    startIcon: <ProjectsKeyIcon />,
    endIcon: <CopyIcon />,
    id: 'project-key'
  }
];

const Item = ({
  id,
  link,
  children
}: {
  id: string;
  link: string;
  children: ReactNode;
}): ReactElement => {
  if (id === 'testnet') {
    return <NavLink to={link || '/'}>{children}</NavLink>;
  }
  return <>{children}</>;
};

const Sidebar = (): ReactElement => {
  const [activeElement, setActiveElement] = useState('testnet');
  const { count } = useContext(TestnetsContext);
  const handleSideBarItemOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    // setActiveElement(with_the_id);
  };

  return (
    <Container>
      <LinkBack>
        <Button startIcon={<ArrowBackIcon />} bold="semiBold" variant="text">
          Back to all projects
        </Button>
      </LinkBack>
      <ItemsContainer>
        <Heading>
          <StarIcon />
          <Text variant="semiBold">Acme frontend</Text>
        </Heading>
        <Ul>
          {sideBarItems.map((item) => {
            return (
              <Li key={item.id}>
                <Item link={item?.link || '/'} id={item.id}>
                  <Button
                    size="large"
                    active={activeElement === item.id}
                    variant="secondary"
                    fullWidth
                    startIcon={item.startIcon}
                    endIcon={item.endIcon}
                    onClick={handleSideBarItemOnClick}
                  >
                    {item.name}
                    {item.id === 'testnet' && <Chip>{`${count}`}</Chip>}
                    {item.id === 'members' && <Chip>{'1'}</Chip>}
                  </Button>
                </Item>
              </Li>
            );
          })}
        </Ul>
      </ItemsContainer>
    </Container>
  );
};

export default Sidebar;
