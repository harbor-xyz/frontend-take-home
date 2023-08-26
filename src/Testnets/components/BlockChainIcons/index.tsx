import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';
import { IconData } from '../Card/utils/getBlockChainIcons';

const Container = styled.div`
  display: flex;
  padding-left: 0;
  align-items: center;
  margin-left: 6px;
`;

const Icon = styled.div`
  display: flex;
  padding: 6px;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${theme.color.greyDDD};
  background: ${theme.color.white};
  margin-left: -6px;
`;

interface BlockChainIconsProps {
  icons: IconData[];
}
const BlockChainIcons = ({ icons }: BlockChainIconsProps) => {
  return (
    <Container>
      {icons.map((item: IconData) => {
        return (
          <Icon>
            <img src={item.icon} alt={item.name} />
          </Icon>
        );
      })}
    </Container>
  );
};

export default BlockChainIcons;
