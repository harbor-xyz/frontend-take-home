import { Action, ActionWithPayload } from "../../utils/reducer.utils";
import { TestNet, SortSelection } from "../models/testnets.d";
import { TEST_NET_ACTION_TYPES } from "../actionTypes";

export type GetTestNetDataRequested =
  Action<TEST_NET_ACTION_TYPES.GET_DATA_REQUESTED>;

export type GetTestNetDataReceived = ActionWithPayload<
  TEST_NET_ACTION_TYPES.GET_DATA_RECEIVED,
  {
    data: TestNet[];
  }
>;

export type GetTestNetDataError = ActionWithPayload<
  TEST_NET_ACTION_TYPES.GET_DATA_ERROR,
  {
    data: string;
  }
>;

export type SetSorter = ActionWithPayload<
  TEST_NET_ACTION_TYPES.SORT_LIST,
  SortSelection
>;

export type TestNetActions =
  | GetTestNetDataRequested
  | GetTestNetDataReceived
  | GetTestNetDataError
  | SetSorter;
