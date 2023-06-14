const ROUTE_BREADCRUMBS = {
  testnets: { label: "Testnets", value: "/testnets" },
  "create-new-testnet": {
    label: "Create new Testnet",
    value: "/create-new-testnet",
  },
  cli: { label: "Using CLI", value: "/create-new-testnet/cli" },
  bridge: { label: "Using Bridge", value: "/create-new-testnet/bridge" },
};

export const useBreadcrumbs = (path) => {
  const splitPath = path.split("/").filter(Boolean);

  return [
    ROUTE_BREADCRUMBS["testnets"],
    ...splitPath.map((pathPart) => ROUTE_BREADCRUMBS[pathPart]),
  ];
};
