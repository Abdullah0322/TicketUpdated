import axios from "axios";
import SERVER from "../globals";

import{

TEMPLATE_LIST_REQUEST,
TEMPLATE_LIST_SUCCESS,
TEMPLATE_LIST_FAIL,
TEMPLATE_DETAILS_REQUEST,
TEMPLATE_DETAILS_SUCCESS,
TEMPLATE_DETAILS_FAIL,
}from '../constants/templateConstants'

export const listTemplates =
  (keyword = "", pageNumber = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: TEMPLATE_LIST_REQUEST });

      const { data } = await axios.get(
        `${SERVER}/api/template`
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

  export const listTemplateDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: TEMPLATE_DETAILS_REQUEST })
  
      const { data } = await axios.get(`${SERVER}/api/template/${id}`)
  
      dispatch({
        type: TEMPLATE_DETAILS_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: TEMPLATE_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
  