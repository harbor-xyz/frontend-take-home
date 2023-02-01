import { TestNetsState } from "../models/testnets";
import { TEST_NET_ACTION_TYPES } from "../actionTypes";
import {
  GetTestNetDataError,
  GetTestNetDataReceived,
  TestNetActions,
} from "../actions/testnet.actions";

const Initial_state: TestNetsState = {
  data: [],
  isLoading: false,
  error: false,
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
