import axios from "axios";
import SERVER from "../globals";
import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
} from "../constants/userConstants";

export const listUsers = () => async (dispatch) => {
  try {
    dispatch({ type: TICKET_LIST_REQUEST });
    const { data } = await axios.get(`${SERVER}/api/`);

    dispatch({
      type: TICKET_LIST_SUCCESS,
      payload: data,
    });
    console.log(data);
  } catch (error) {
    dispatch({
      type: TICKET_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
