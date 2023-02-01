import { Dispatch } from "redux";
import {
  GetTestNetDataError,
  GetTestNetDataReceived,
  GetTestNetDataRequested,
  TestNetActions,
} from "../actions/testnet.actions";
import { TEST_NET_ACTION_TYPES } from "../actionTypes";
import { TestNet } from "../models/testnets";
import { createAction } from "../../utils/reducer.utils";

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
  () => async (dispatch: Dispatch<TestNetActions>) => {
    dispatch(fetchTestNetsRequested());
    try {
      const response = await fetch("http://localhost:3000/testnets");
      const json = await response.json();
      dispatch(fetchTestNetsReceived(json.data.testnet));
    } catch (error: any) {
      console.log(error);
      dispatch(fetchTestNetsError(error?.message));
    }
  };
