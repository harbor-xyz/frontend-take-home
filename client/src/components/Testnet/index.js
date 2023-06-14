import { useMemo } from "react";
import { FaCog } from "react-icons/fa";
import { TestnetStatus, Separator, Button } from "../../components";
import { timeDifference } from "../../utils";
import pluralize from "pluralize";
import classNames from "classnames";
import { isTestnetStatusRunning } from "../TestnetStatus/helpers";
import AlchemyIcon from "../../icons/Blockchains/Alchemy.png";
import PolygonIcon from "../../icons/Blockchains/Polygon.png";
import ArbitrumIcon from "../../icons/Blockchains/Arbitrum.png";
import EthereumIcon from "../../icons/Blockchains/Ethereum.png";
import FantomIcon from "../../icons/Blockchains/Fantom.png";
import OptimismIcon from "../../icons/Blockchains/Optimism.png";
import { TESTNET_STATUS } from "../TestnetStatus/constants";

const CHAIN_IMAGES = {
  alchemy: AlchemyIcon,
  polygon: PolygonIcon,
  arbitrum: ArbitrumIcon,
  ethereum: EthereumIcon,
  fantom: FantomIcon,
  optimism: OptimismIcon,
};

function Testnet({ testnet }) {
  const timeSinceModified = useMemo(
    () => timeDifference(testnet.updated_at),
    [testnet.updated_at]
  );

  const isStopped = testnet.status === TESTNET_STATUS.STOPPED;

  const isTestnetRunning = isTestnetStatusRunning(testnet.status);
  return (
    <div
      className={classNames("py-6 px-8 rounded-2xl mb-6 drop-shadow  border", {
        "border-red-400 bg-red-50": isStopped,
        "border-neutral-100 bg-white": !isStopped,
      })}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="text-xl font-bold">{testnet.name}</div>
        <div className="flex flex-row items-center gap-x-4">
          <TestnetStatus status={testnet.status} />
          <Separator />
          <div
            className={classNames({
              "text-blue-600": isTestnetRunning,
              "text-gray-500": !isTestnetRunning,
            })}
          >
            <Button iconLeft={<FaCog />}>Settings</Button>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-x-4 text-sm font-medium">
          <div>
            {`${testnet.testnet_off_chain_actors.length} offchain ${pluralize(
              "actor",
              testnet.testnet_off_chain_actors.length
            )}`}
          </div>
          <Separator />
          <div>
            {`${testnet.testnet_chains.length}
            ${pluralize("Blockchains", testnet.testnet_chains.length)}`}
          </div>
          <div className="flex flex-row items-center gap-x-1">
            {testnet.testnet_chains.map((chain) => (
              <div
                key={chain.chain}
                className="p-1.5 border border-gray-300 rounded-md"
              >
                <img
                  src={CHAIN_IMAGES[chain.chain]}
                  alt="blockchain"
                  width="16px"
                  height="16px"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="text-gray-500 font-medium text-sm">
          {timeSinceModified}
        </div>
      </div>
    </div>
  );
}

export { Testnet };
