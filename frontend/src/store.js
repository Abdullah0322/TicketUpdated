import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  ticketCreateReducer,
  ticketDeleteReducer,
  ticketHeadingCreateReducer,
  ticketHeading2CreateReducer,
  ticketListReducer,
  ticketListallReducer,
  ticketUpdateReducer,
  ticketHeadingDeleteReducer,
  ticketHeading2DeleteReducer,
  ticketDuplicateReducer,
  ticketDeleteallReducer
} from "./reducers/ticketReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  templateDetailsReducer,
  templateListReducer,
  templateDeleteReducer,
} from "./reducers/templateReducers";
import{

  userListReducer,
  userDetailsReducer
} from "./reducers/userReducers"


const reducer = combineReducers({
  ticketList: ticketListReducer,
  ticketCreate: ticketCreateReducer,
  ticketDelete: ticketDeleteReducer,
  ticketHeadingCreate: ticketHeadingCreateReducer,
  ticketUpdate: ticketUpdateReducer,
  ticketHeading2Create: ticketHeading2CreateReducer,
  ticketHeadingDelete: ticketHeadingDeleteReducer,
  ticketHeading2Delete: ticketHeading2DeleteReducer,
  ticketDuplicate: ticketDuplicateReducer,
  templateList: templateListReducer,
  templateDetails: templateDetailsReducer,
  templateDelete: templateDeleteReducer,
  userList: userListReducer,
  userDetails: userDetailsReducer,
  ticketDeleteall:ticketDeleteallReducer
});
const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
