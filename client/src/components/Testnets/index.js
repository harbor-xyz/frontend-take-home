import { useEffect, useState, useMemo } from "react";
import { Testnet, Button, Separator, Dropdown, LeftNav } from "..";
import {
  firstLetterUppercase,
  sortTestnetByNameDesc,
  sortTestnetByNameAsc,
  sortTestnetByCreatedDate,
  sortTestnetByStatus,
  sortTestnetByUpdatedDate,
} from "../../utils";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Testnets() {
  const [testnets, setTestnets] = useState([]);
  const navigate = useNavigate();

  const testnetFilters = useMemo(() => {
    const testnetStatuses = testnets
      .map((testnet) => testnet.status)
      .filter((value, index, array) => {
        return array.indexOf(value) === index;
      });
    return [
      { label: "All", secondaryLabel: testnets.length, value: "ALL" },
      ...Object.values(testnetStatuses).map((testnetStatus) => ({
        label: firstLetterUppercase(testnetStatus),
        secondaryLabel: testnets.filter(
          (testnet) => testnet.status === testnetStatus
        ).length,
        value: testnetStatus,
      })),
    ];
  }, [testnets]);

  const testnetSortOptions = useMemo(() => {
    return [
      {
        label: "Name A-Z",
        value: "ASC",
      },
      {
        label: "Name Z-A",
        value: "DESC",
      },
      {
        label: "Status",
        value: "STATUS",
      },
      {
        label: "Date created",
        value: "DATE_CREATED",
      },
      {
        label: "Last modified",
        value: "LAST_MODIFIED",
      },
    ];
  }, []);

  const [selectedFilter, selectFilter] = useState("ALL");
  const [selectedSort, selectSort] = useState("ASC");

  const filteredTestnets = useMemo(() => {
    if (selectedFilter === "ALL") {
      return testnets;
    }
    return testnets.filter((testnet) => testnet.status === selectedFilter);
  }, [testnets, selectedFilter]);

  const sortedTestnets = useMemo(() => {
    let sortFunction;
    switch (selectedSort) {
      case "ASC":
        sortFunction = sortTestnetByNameAsc;
        break;
      case "DESC":
        sortFunction = sortTestnetByNameDesc;
        break;
      case "STATUS":
        sortFunction = sortTestnetByStatus;
        break;
      case "DATE_CREATED":
        sortFunction = sortTestnetByCreatedDate;
        break;
      case "LAST_MODIFIED":
        sortFunction = sortTestnetByUpdatedDate;
        break;
      default:
        sortFunction = () => null;
        break;
    }
    return filteredTestnets.sort(sortFunction);
  }, [filteredTestnets, selectedSort]);

  useEffect(() => {
    try {
      fetch("/testnets")
        .then((res) => res.json())
        .then((res) => {
          setTestnets(res.data.testnet);
        });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <>
      <div className="grid grid-cols-4">
        <LeftNav />
        <div className="bg-neutral-100 px-16 py-10 col-span-3 min-h-screen">
          <div className="mb-5 flex justify-between items-center">
            <div className="flex flex-row flex-nowrap items-center gap-x-5">
              <div className="text-2xl font-bold">
                Testnets ({filteredTestnets.length})
              </div>
              <Button
                variant={Button.VARIANTS.GHOST}
                iconLeft={<FaPlus />}
                onClick={() => navigate("/create-new-testnet")}
              >
                New Testnet
              </Button>
            </div>
            <div className="flex flex-row flex-nowrap items-center gap-x-5 text-sm">
              <div className="flex flex-row flex-nowrap items-center gap-x-2">
                <div className="text-gray-500 font-medium">Filter by:</div>
                <Dropdown
                  options={testnetFilters}
                  selectedValue={selectedFilter}
                  onChange={(value) => selectFilter(value)}
                />
              </div>

              <Separator />
              <div className="flex flex-row flex-nowrap items-center gap-x-2">
                <div className="text-gray-500 font-medium">Sort by:</div>
                <Dropdown
                  options={testnetSortOptions}
                  selectedValue={selectedSort}
                  onChange={(value) => selectSort(value)}
                />
              </div>
            </div>
          </div>

          {sortedTestnets.map((testnet) => (
            <Testnet key={testnet.id} testnet={testnet} />
          ))}
        </div>
      </div>
    </>
  );
}

export { Testnets };
