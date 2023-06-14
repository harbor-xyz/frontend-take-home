import BridgeLibrary from "../../icons/BridgeLibrary.svg";
import { useBreadcrumbs } from "../../hooks/useBreadcrumbs";
import { useLocation } from "react-router-dom";
import { Breadcrumbs } from "..";

function CreateNewTestnetUsingBridge() {
  const location = useLocation();
  const breadcrumbs = useBreadcrumbs(location.pathname);
  return (
    <div className="bg-neutral-100 px-16 py-10 min-h-screen">
      <Breadcrumbs list={breadcrumbs} />
      <div className="bg-white rounded-xl py-8 px-14 border border-gray-300 drop-shadow-md max-w-4xl">
        <div className="flex flex-row gap-x-7">
          <div className="flex-1 bg-white  p-8 flex flex-col gap-y-6">
            <div className="self-center flex flex-col items-center gap-y-4">
              <img src={BridgeLibrary} alt="" width="32" height="32" />
              <div className="text-2xl font-bold">
                Create a Testnet using a bridge
              </div>
            </div>
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Name your Testnet
              </label>
              <input
                id="name"
                type="text"
                className="w-full border border-gray-200 rounded-lg p-2 bg-gray-100 mt-1.5"
              />
            </div>
            <div className="text-sm font-medium">
              Cloning into project:{" "}
              <span className="text-blue-600 font-weight-semibold">
                Acme-star-first-project
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CreateNewTestnetUsingBridge };
