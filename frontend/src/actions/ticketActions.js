import axios from "axios";
import SERVER from "../globals";
import {
  TICKET_LIST_REQUEST,
  TICKET_LIST_SUCCESS,
  TICKET_LIST_FAIL,
  TICKET_LISTALL_REQUEST,
  TICKET_LISTALL_SUCCESS,
  TICKET_LISTALL_FAIL,
  TICKET_CREATE_REQUEST,
  TICKET_CREATE_SUCCESS,
  TICKET_CREATE_FAIL,
  TICKET_CREATE_RESET,
  TICKET_DELETE_REQUEST,
  TICKET_DELETE_SUCCESS,
  TICKET_DELETE_FAIL,
  TICKET_CREATE_HEADING_REQUEST,
  TICKET_CREATE_HEADING_SUCCESS,
  TICKET_CREATE_HEADING_FAIL,
  TICKET_CREATE_HEADING2_REQUEST,
  TICKET_CREATE_HEADING2_SUCCESS,
  TICKET_CREATE_HEADING2_FAIL,
  TICKET_UPDATE_REQUEST,
  TICKET_UPDATE_SUCCESS,
  TICKET_UPDATE_FAIL,
  TICKET_UPDATE_RESET,
  TICKET_DELETE_HEADING2_REQUEST,
  TICKET_DELETE_HEADING2_SUCCESS,
  TICKET_DELETE_HEADING2_FAIL,
  TICKET_DELETE_HEADING2_RESET,
  TICKET_DELETE_HEADING_REQUEST,
  TICKET_DELETE_HEADING_SUCCESS,
  TICKET_DELETE_HEADING_FAIL,
  TICKET_DELETE_HEADING_RESET,
  TICKET_DUPLICATE_REQUEST,
  TICKET_DUPLICATE_SUCCESS,
  TICKET_DUPLICATE_FAIL,
  TICKET_DELETEALL_REQUEST,
  TICKET_DELETEALL_SUCCESS,
  TICKET_DELETEALL_FAIL,
} from "../constants/ticketConstants";

export const listTickets =
  (keyword = "", pageNumber = "", id) =>
  async (dispatch) => {
    try {
      dispatch({ type: TICKET_LIST_REQUEST });
      const user = JSON.parse(localStorage.getItem("response"));
      const id = user.data.user._id;
      const templateid = localStorage.getItem("id");

      const { data } = await axios.get(
        `${SERVER}/api/tickets/${id}?keyword=${keyword}&pageNumber=${pageNumber}`
      );

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

export const listTicketsall =
  (keyword = "", pageNumber = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: TICKET_LIST_REQUEST });
      const { data } = await axios.get(
        `${SERVER}/api/tickets?keyword=${keyword}&pageNumber=${pageNumber}`
      );

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

// export const createTicket =
//   ({ ticketdetails }) =>
//   async (dispatch, getState) => {
//     try {
//       dispatch({
//         type: TICKET_CREATE_REQUEST,
//       });

//       const { data } = await axios.post(`/api/tickets`, ticketdetails);

//       dispatch({
//         type: TICKET_CREATE_SUCCESS,
//         payload: data,
//       });
//     } catch (error) {
//       const message =
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message;
//       dispatch({
//         type: TICKET_CREATE_FAIL,
//         payload: message,
//       });
//     }
//   };

export const createTicket = (id) => async (dispatch) => {
  try {
    dispatch({
      type: TICKET_CREATE_REQUEST,
    });
    const templateid = localStorage.getItem("id");
    const user = JSON.parse(localStorage.getItem("response"));
    const id = user.data.user._id;
    const { data } = await axios.post(`${SERVER}/api/tickets`, { id });

    dispatch({
      type: TICKET_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: TICKET_CREATE_FAIL,
      payload: message,
    });
  }
};

export const deleteTicket = (id) => async (dispatch) => {
  try {
    dispatch({
      type: TICKET_DELETE_REQUEST,
    });
    const templateid = localStorage.getItem("id");

    await axios.put(`${SERVER}/api/tickets/${id}/deleteticket/${templateid}`);

    dispatch({
      type: TICKET_DELETE_SUCCESS,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: TICKET_DELETE_FAIL,
      payload: message,
    });
  }
};

export const deleteallTicket = () => async (dispatch) => {
  try {
    dispatch({
      type: TICKET_DELETEALL_REQUEST,
    });
    const user = JSON.parse(localStorage.getItem("response"));
    const id = user.data.user._id;

    await axios.put(`${SERVER}/api/tickets/deleteall/${id}`);

    dispatch({
      type: TICKET_DELETEALL_SUCCESS,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: TICKET_DELETEALL_FAIL,
      payload: message,
    });
  }
};

export const createTicketHeading = (ticketId) => async (dispatch) => {
  try {
    dispatch({
      type: TICKET_CREATE_HEADING_REQUEST,
    });

    await axios.post(`${SERVER}/api/tickets/${ticketId}/headings`, {});

    dispatch({
      type: TICKET_CREATE_HEADING_SUCCESS,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: TICKET_CREATE_HEADING_FAIL,
      payload: message,
    });
  }
};

export const deleteTicketHeading = (ticketId) => async (dispatch) => {
  try {
    dispatch({
      type: TICKET_DELETE_HEADING_REQUEST,
    });

    await axios.delete(`${SERVER}/api/tickets/${ticketId}/headings`, {});

    dispatch({
      type: TICKET_DELETE_HEADING_SUCCESS,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: TICKET_DELETE_HEADING_FAIL,
      payload: message,
    });
  }
};

export const createTicketHeading2 = (ticketId) => async (dispatch) => {
  try {
    dispatch({
      type: TICKET_CREATE_HEADING2_REQUEST,
    });

    await axios.post(`${SERVER}/api/tickets/${ticketId}/headings2`, {});

    dispatch({
      type: TICKET_CREATE_HEADING2_SUCCESS,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: TICKET_CREATE_HEADING2_FAIL,
      payload: message,
    });
  }
};

export const deleteTicketHeading2 = (ticketId) => async (dispatch) => {
  try {
    dispatch({
      type: TICKET_DELETE_HEADING2_REQUEST,
    });

    await axios.delete(`${SERVER}/api/tickets/${ticketId}/headings2`, {});

    dispatch({
      type: TICKET_DELETE_HEADING2_SUCCESS,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: TICKET_DELETE_HEADING2_FAIL,
      payload: message,
    });
  }
};
export const updateTicket = (ticket) => async (dispatch) => {
  try {
    dispatch({
      type: TICKET_UPDATE_REQUEST,
    });

    const { data } = await axios.put(
      `${SERVER}/api/tickets/${ticket._id}/headings/${localStorage.getItem(
        "id"
      )}`,
      ticket
    );

    dispatch({
      type: TICKET_UPDATE_SUCCESS,
      payload: data,
    });
    dispatch({ type: TICKET_LIST_SUCCESS, payload: data });
    console.log(ticket._id);
    console.log(ticket);
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: TICKET_UPDATE_FAIL,
      payload: message,
    });
  }
};

export const updateTicketbody = (ticket) => async (dispatch) => {
  try {
    dispatch({
      type: TICKET_UPDATE_REQUEST,
    });

    const { data } = await axios.put(
      `${SERVER}/api/tickets/${ticket._id}/body/${localStorage.getItem("id")}`,
      ticket
    );

    dispatch({
      type: TICKET_UPDATE_SUCCESS,
      payload: data,
    });
    dispatch({ type: TICKET_LIST_SUCCESS, payload: data });
    console.log(ticket._id);
    console.log(ticket);
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: TICKET_UPDATE_FAIL,
      payload: message,
    });
  }
};

export const duplicateTicket = (ticket) => async (dispatch) => {
  try {
    dispatch({
      type: TICKET_DUPLICATE_REQUEST,
    });

    delete ticket._id;
    ticket.isSelected = [];
    const { data } = await axios.post(
      `${SERVER}/api/tickets/duplicate`,
      ticket
    );

    dispatch({
      type: TICKET_DUPLICATE_SUCCESS,
      payload: data,
    });
    dispatch({ type: TICKET_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: TICKET_DUPLICATE_FAIL,
      payload: message,
    });
  }
};
