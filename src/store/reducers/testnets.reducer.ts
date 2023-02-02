import { SortingOrder, TestNetsState } from "../models/testnets.d";
import { TEST_NET_ACTION_TYPES } from "../actionTypes";
import {
  GetTestNetDataError,
  GetTestNetDataReceived,
  SetSorter,
  TestNetActions,
} from "../actions/testnet.actions";
import { Sorters } from "../../typings/models.d";

const Initial_state: TestNetsState = {
  data: [],
  isLoading: false,
  error: false,
  sortSelection: {
    key: Sorters.NAME,
    order: SortingOrder.ASC,
  },
};

const actionMap = {
  [TEST_NET_ACTION_TYPES.GET_DATA_REQUESTED](
    state: TestNetsState,
    _action: any
  ): TestNetsState {
    return {
      ...state,
      isLoading: true,
    };
  },
  [TEST_NET_ACTION_TYPES.GET_DATA_RECEIVED](
    state: TestNetsState,
    action: GetTestNetDataReceived
  ): TestNetsState {
    return {
      ...state,
      isLoading: false,
      data: action.payload.data,
    };
  },
  [TEST_NET_ACTION_TYPES.GET_DATA_ERROR](
    state: TestNetsState,
    action: GetTestNetDataError
  ): TestNetsState {
    return {
      ...state,
      isLoading: false,
      error: !!action.payload.data,
    };
  },
  [TEST_NET_ACTION_TYPES.SORT_LIST](
    state: TestNetsState,
    action: SetSorter
  ): TestNetsState {
    return {
      ...state,
      sortSelection: action.payload,
    };
  },
};

const testNetsReducer = (
  state = Initial_state,
  action: TestNetActions
): TestNetsState => {
  const actionHandler = actionMap[action.type];
  if (actionHandler) {
    return actionHandler(state, action);
  }
  return state;
};

export default testNetsReducer;
