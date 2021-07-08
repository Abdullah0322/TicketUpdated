import axios from "axios";

import{

TEMPLATE_LIST_REQUEST,
TEMPLATE_LIST_SUCCESS,
TEMPLATE_LIST_FAIL
}from '../constants/templateConstants'

export const listTemplates =
  (keyword = "", pageNumber = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: TEMPLATE_LIST_REQUEST });

      const { data } = await axios.get(
        `http://localhost:5000/api/template?keyword=${keyword}&pageNumber=${pageNumber}`
      );

      dispatch({
        type: TEMPLATE_LIST_SUCCESS,
        payload: data,
      });
      console.log(data);
    } catch (error) {
      dispatch({
        type: TEMPLATE_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };