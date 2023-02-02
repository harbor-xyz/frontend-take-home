import { Dispatch } from "redux";
import { sortListUtil } from "./../../utils/sorting.utils";
import {
  GetTestNetDataError,
  GetTestNetDataReceived,
  GetTestNetDataRequested,
  TestNetActions,
} from "../actions/testnet.actions";
import { TEST_NET_ACTION_TYPES } from "../actionTypes";
import { TestNet } from "../models/testnets.d";
import { createAction } from "../../utils/reducer.utils";
import { RootState } from "../reducers";

export const fetchTestNetsReceived = (
  data: TestNet[]
): GetTestNetDataReceived =>
  createAction(TEST_NET_ACTION_TYPES.GET_DATA_RECEIVED, {
    data,
  });
export const fetchTestNetsRequested = (): GetTestNetDataRequested =>
  createAction(TEST_NET_ACTION_TYPES.GET_DATA_REQUESTED);

export const fetchTestNetsError = (error: string): GetTestNetDataError =>
  createAction(TEST_NET_ACTION_TYPES.GET_DATA_ERROR, { data: error });

export const fetchTestNets =
  () =>
  async (dispatch: Dispatch<TestNetActions>, getState: () => RootState) => {
    const { key, order } = getState().testNets.sortSelection;
    dispatch(fetchTestNetsRequested());
    try {
      const response = await fetch("http://localhost:3000/testnets");
      const json = await response.json();
      const testnets = json.data.testnet as TestNet[];
      const sortedData = sortListUtil(testnets, key, order);
      dispatch(fetchTestNetsReceived(sortedData));
    } catch (error: any) {
      dispatch(fetchTestNetsError(error?.message));
    }
  };
