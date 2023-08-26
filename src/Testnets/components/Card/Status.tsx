import TickInCircle from "../../../icons/TickInCircle";
import styled from "@emotion/styled";
import Text from "../../../ui/Text";
import { css } from "@emotion/react";
import { theme } from "../../../styles/theme";
import HourglassTimerIcon from "../../../icons/HourglassTimerIcon";
import React, { ReactElement } from "react";
import FailedIcon from "../../../icons/FailedIcon";
import CopyIconFilled from "../../../icons/CopyIconFilled";
import DisabledIcon from "../../../icons/DisabledIcon";
import CheckboxIcon from "../../../icons/CheckboxIcon";

type statusInfoType = {
  icon: ReactElement;
  color: string;
  text: string;
};

const statusInfo: Record<string, statusInfoType> = {
  RUNNING: {
    icon: <TickInCircle />,
    color: theme.color.green,
    text: "Running",
  },
  PENDING: {
    icon: <HourglassTimerIcon />,
    color: theme.color.orange,
    text: "Pending",
  },
  STANDING_UP: {
    icon: <HourglassTimerIcon />,
    color: theme.color.orange,
    text: "Standing up",
  },
  UPDATING: {
    icon: <HourglassTimerIcon />,
    color: theme.color.orange,
    text: "Updating",
  },
  CLONING: {
    icon: <CopyIconFilled />,
    color: theme.color.purple,
    text: "Cloning",
  },
  KILLED: {
    icon: <DisabledIcon />,
    color: theme.color.greyDDD,
    text: "Killed",
  },
  STOPPED: {
    icon: <DisabledIcon />,
    color: theme.color.greyDDD,
    text: "Stopped",
  },
  FAILED: {
    icon: <FailedIcon />,
    color: theme.color.red,
    text: "Failed",
  },
  ALL: {
    icon: <CheckboxIcon />,
    color: theme.color.blue,
    text: "All",
  },
};

const StatusText = styled(Text)<{ status: string; disabled: boolean }>`
  ${({ status, disabled }) => css`
    text-transform: capitalize;
    ${disabled
      ? css`
          color: ${theme.color.greyAAA};
        `
      : css`
          color: ${statusInfo[status]?.color || theme.color.greyDDD};
        `}
  `}
`;

const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

interface TestnetStatusProps {
  status: string;
  disabled?: boolean;
}
const TestnetStatus = ({ status, disabled = false }: TestnetStatusProps) => {
  return (
    <Status>
      {statusInfo[status]?.icon || <HourglassTimerIcon />}
      <StatusText status={status} disabled={disabled}>
        {statusInfo[status]?.text.toLowerCase()}
      </StatusText>
    </Status>
  );
};

export default TestnetStatus;
