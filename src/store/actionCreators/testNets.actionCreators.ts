import { Dispatch } from "redux";
import { getTestNets } from "./../../services/testnet";
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
import { delay } from "../../utils/common.utils";

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
      const testnets = await getTestNets();
      const sortedData = sortListUtil(testnets, key, order);
      // Fake Delay to show loader
      await delay(3000);
      dispatch(fetchTestNetsReceived(sortedData));
    } catch (error: any) {
      dispatch(fetchTestNetsError(error?.message));
    }
  };
