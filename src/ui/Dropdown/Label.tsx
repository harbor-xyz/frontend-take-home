import Text from "../Text";
import ArrowDownIcon from "../../icons/ArrowDownIcon";
import Button from "../Button";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Option } from "./index";

const Placeholder = styled.span`
  cursor: pointer;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
`;

interface LabelProps {
  label?: string;
  placeholder?: string;
  handleOnClick?: () => void;
  selectedOption: Option | null;
}

const Label = ({
  handleOnClick,
  label,
  selectedOption,
  placeholder = "Select options",
}: LabelProps) => {
  const theme = useTheme();
  return (
    <Button variant="text" handleOnClick={handleOnClick}>
      {label && <Text color={theme.color.grey999}>{label}</Text>}

      <Placeholder>
        {selectedOption ? (
          typeof selectedOption?.label === "string" ? (
            <Text color={theme.color.grey555}>{selectedOption?.label}</Text>
          ) : (
            selectedOption.label
          )
        ) : (
          <Text color={theme.color.grey555}>{placeholder}</Text>
        )}
        <ArrowDownIcon height={8} width={8} fill={theme.color.grey555} />
      </Placeholder>
    </Button>
  );
};

export default Label;
