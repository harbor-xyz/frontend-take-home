import classNames from "classnames";
import { firstLetterUppercase } from "../../utils";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaRegHourglass,
} from "react-icons/fa";
import { TESTNET_STATUS } from "./constants";

function TestnetStatusIcon({ status }) {
  if (status === TESTNET_STATUS.RUNNING) {
    return <FaCheckCircle />;
  }
  if (status === TESTNET_STATUS.STOPPED) {
    return <FaExclamationTriangle />;
  }
  if (status === TESTNET_STATUS.PENDING) {
    return <FaRegHourglass />;
  }
}

function TestnetStatus({ status }) {
  return (
    <div
      className={classNames(
        "inline-flex flex-row items-center gap-x-2 font-semibold",
        {
          "text-green-600": status === TESTNET_STATUS.RUNNING,
          "text-yellow-600": status === TESTNET_STATUS.PENDING,
          "text-red-600": status === TESTNET_STATUS.STOPPED,
        }
      )}
    >
      <TestnetStatusIcon status={status} />
      {firstLetterUppercase(status)}
    </div>
  );
}

export { TestnetStatus };
