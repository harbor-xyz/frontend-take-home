import { combineReducers } from "redux";
import testNetsReducer from "./testnets.reducer";

const reducers = combineReducers({
  testNets: testNetsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
