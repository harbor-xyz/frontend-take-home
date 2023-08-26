import Text from "../Text";
import styled from "@emotion/styled";
import Button from "../Button";
import { useTheme } from "@emotion/react";
import { ReactNode } from "react";

const StyledButton = styled(Button)`
  width: 100%;
`;

interface ItemProps {
  label: string | ReactNode;
}
const Item = ({ label }: ItemProps) => {
  const theme = useTheme();
  return (
    <StyledButton variant="secondary" size="small">
      {typeof label === "string" ? (
        <Text variant="semiBold" color={theme.color.grey555}>
          {label}
        </Text>
      ) : (
        label
      )}
    </StyledButton>
  );
};

export default Item;
