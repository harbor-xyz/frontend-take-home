import { Status } from "./../../typings/models.d";
import { RootState } from "./../reducers";
import { Dispatch } from "redux";
import { createAction } from "../../utils/reducer.utils";
import { TEST_NET_ACTION_TYPES } from "../actionTypes";
import { TestNetActions } from "../actions/testnet.actions";
import { filterData } from "../../utils/filter.utils";
import { sortListUtil } from "../../utils/sorting.utils";

export const filterList =
  (data: Status | "all") =>
  (dispatch: Dispatch<TestNetActions>, getState: () => RootState) => {
    const {
      originalData,
      sortSelection: { key, order },
    } = getState().testNets;
    let list = filterData(data, originalData);
    list = sortListUtil(list, key, order);
    dispatch(
      createAction(TEST_NET_ACTION_TYPES.SET_SORTED_AND_FILTRED_LIST, list)
    );
    dispatch(createAction(TEST_NET_ACTION_TYPES.FILTER_LIST, data));
  };
