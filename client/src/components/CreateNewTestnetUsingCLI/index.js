import CommandForCLI from "../../icons/CommandForCLI.svg";
import { ProgressSteps, Breadcrumbs } from "..";
import { useBreadcrumbs } from "../../hooks/useBreadcrumbs";
import { useLocation } from "react-router-dom";

const STEPS = [
  {
    label: "Download and install CLI",
  },
  {
    label: "Configure CLI",
  },
  {
    label: "Start your Testnet",
  },
];

function CreateNewTestnetUsingCLI() {
  const location = useLocation();
  const breadcrumbs = useBreadcrumbs(location.pathname);

  return (
    <div className="bg-neutral-100 px-16 py-10 min-h-screen">
      <Breadcrumbs list={breadcrumbs} />
      <div className="bg-white rounded-xl py-8 px-14 border border-gray-300 drop-shadow-md max-w-4xl">
        <div className="flex flex-row gap-x-7">
          <div className="flex-1 bg-white  p-8 flex flex-col items-center gap-y-10">
            <div className="self-center flex flex-col items-center gap-y-4">
              <img src={CommandForCLI} alt="" width="32" height="32" />
              <div className="text-2xl font-bold">
                Create a Testnet using CLI
              </div>
            </div>
            <ProgressSteps steps={STEPS} />
            <div className="mt-10 flex flex-col items-center gap-y-4">
              <div className="text-xl font-bold">Installing Harbor CLI</div>
              <div className="text-sm text-gray-700">
                Harbor can be used through a local installation in your project.
                This way, your environment will be reproducible, and you will
                avoid future version conflicts. To install it, just run the
                command below.
              </div>
              <div className="bg-black rounded-xl px-4 py-5 w-full text-white">
                <p>
                  <span className="text-green-400">brew tap</span>{" "}
                  harbor-xyz/homebrew-harbor
                </p>{" "}
                <p>
                  <span className="text-green-400">brew install</span> harbor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CreateNewTestnetUsingCLI };
