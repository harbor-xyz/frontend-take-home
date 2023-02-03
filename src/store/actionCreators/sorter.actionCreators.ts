import { RootState } from "./../reducers";
import { Dispatch } from "redux";
import { createAction } from "../../utils/reducer.utils";
import { TEST_NET_ACTION_TYPES } from "../actionTypes";
import { SortSelection } from "../models/testnets.d";
import { TestNetActions } from "../actions/testnet.actions";
import { sortListUtil } from "../../utils/sorting.utils";

export const sortList =
  (data: SortSelection) =>
  (dispatch: Dispatch<TestNetActions>, getState: () => RootState) => {
    const list = sortListUtil(getState().testNets.data, data.key, data.order);
    dispatch(
      createAction(TEST_NET_ACTION_TYPES.SET_SORTED_AND_FILTRED_LIST, list)
    );
    dispatch(createAction(TEST_NET_ACTION_TYPES.SORT_LIST, data));
  };
