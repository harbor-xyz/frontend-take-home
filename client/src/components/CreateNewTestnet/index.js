import { Button, Breadcrumbs } from "..";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BridgeLibrary from "../../icons/BridgeLibrary.svg";
import CommandForCLI from "../../icons/CommandForCLI.svg";
import { useBreadcrumbs } from "../../hooks/useBreadcrumbs";
import { useLocation } from "react-router-dom";

function CreateNewTestnet() {
  const navigate = useNavigate();
  const location = useLocation();
  const breadcrumbs = useBreadcrumbs(location.pathname);

  return (
    <div className="bg-neutral-100 px-16 py-10 min-h-screen">
      <Breadcrumbs list={breadcrumbs} />
      <div className="bg-white rounded-lg py-8 px-14 border border-gray-300 drop-shadow-md">
        <div className="font-bold text-3xl text-center mb-8">
          Create new testnet using
        </div>
        <div className="flex flex-row gap-x-7">
          <div className="flex-1 bg-white rounded-xl p-8 border border-gray-300 flex flex-col items-center  gap-y-4">
            <img src={BridgeLibrary} alt="" width="32" height="32" />

            <div className="text-2xl font-bold">Bridge library</div>
            <div className="text-sm text-center text-gray-700">
              Start a testnet that will load up a bridge of your choice. We’re
              continuously adding new bridges every week.
            </div>
            <div className="self-stretch mt-7">
              <Button
                variant={Button.VARIANTS.SOLID}
                isFluid
                size={Button.SIZES.LARGE}
                iconRight={<FaArrowRight />}
                onClick={() => navigate("/create-new-testnet/bridge")}
              >
                Start now
              </Button>
            </div>
          </div>
          <div className="flex-1 bg-white rounded-xl p-8 border border-gray-300 flex flex-col items-center  gap-y-4">
            <img src={CommandForCLI} alt="" width="32" height="32" />
            <div className="text-2xl font-bold">Our CLI</div>
            <div className="text-sm text-center text-gray-700">
              Use our comprehensive CLI to create your Testnet. This is great
              for power users who want to configure the Testnet with great
              control.
            </div>
            <div className="self-stretch mt-7">
              <Button
                variant={Button.VARIANTS.OUTLINE}
                isFluid
                size={Button.SIZES.LARGE}
                iconRight={<FaArrowRight />}
                onClick={() => navigate("/create-new-testnet/cli")}
              >
                Start creating
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CreateNewTestnet };
