import{
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
    TICKET_CREATE_HEADING_RESET,

    TICKET_UPDATE_REQUEST,
    TICKET_UPDATE_SUCCESS,
    TICKET_UPDATE_FAIL,
    TICKET_UPDATE_RESET,

    TICKET_CREATE_HEADING2_REQUEST,
    TICKET_CREATE_HEADING2_SUCCESS,
    TICKET_CREATE_HEADING2_FAIL,
    TICKET_CREATE_HEADING2_RESET,

TICKET_DELETE_HEADING2_REQUEST,
TICKET_DELETE_HEADING2_SUCCESS,
 TICKET_DELETE_HEADING2_FAIL,
 TICKET_DELETE_HEADING2_RESET,


 TICKET_DELETE_HEADING_REQUEST,
 TICKET_DELETE_HEADING_SUCCESS,
TICKET_DELETE_HEADING_FAIL,
 TICKET_DELETE_HEADING_RESET,


TICKET_DUPLICATE_REQUEST,
TICKET_DUPLICATE_SUCCESS ,
TICKET_DUPLICATE_FAIL,
TICKET_DUPLICATE_RESET,


TICKET_DELETEALL_REQUEST,
TICKET_DELETEALL_SUCCESS ,
TICKET_DELETEALL_FAIL,


}from '../constants/ticketConstants'
export const ticketListReducer = (state = { tickets: [] }, action) => {
    switch (action.type) {
      case TICKET_LIST_REQUEST:
        return { loading: true, tickets: [] }
      case TICKET_LIST_SUCCESS:
        return {
          loading: false,
          tickets: action.payload.tickets,
          pages: action.payload.pages,
          page: action.payload.page,
        }
      case TICKET_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  // export const ticketListallReducer = (state = { tickets: [] }, action) => {
  //   switch (action.type) {
  //     case TICKET_LISTALL_REQUEST:
  //       return { loading: true, tickets: [] }
  //     case TICKET_LISTALL_SUCCESS:
  //       return {
  //         loading: false,
  //         tickets: action.payload.tickets,
  //         pages: action.payload.pages,
  //         page: action.payload.page,
  //       }
  //     case TICKET_LISTALL_FAIL:
  //       return { loading: false, error: action.payload }
  //     default:
  //       return state
  //   }
  // }
  

  export const ticketCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case TICKET_CREATE_REQUEST:
        return { loading: true }
      case TICKET_CREATE_SUCCESS:
        return { loading: false, success: true, ticket: action.payload }
      case TICKET_CREATE_FAIL:
        return { loading: false, error: action.payload }
      case TICKET_CREATE_RESET:
        return {}
      default:
        return state
    }
  }


  export const ticketDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case TICKET_DELETE_REQUEST:
        return { loading: true }
      case TICKET_DELETE_SUCCESS:
        return { loading: false, success: true }
      case TICKET_DELETE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }


  export const ticketHeadingCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case TICKET_CREATE_HEADING_REQUEST:
        return { loading: true }
      case TICKET_CREATE_HEADING_SUCCESS:
        return { loading: false, success: true }
      case TICKET_CREATE_HEADING_FAIL:
        return { loading: false, error: action.payload }
      case TICKET_CREATE_HEADING_RESET:
        return {}
      default:
        return state
    }
  }
  export const ticketHeadingDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case TICKET_DELETE_HEADING_REQUEST:
        return { loading: true }
      case TICKET_DELETE_HEADING_SUCCESS:
        return { loading: false, success: true }
      case TICKET_DELETE_HEADING_FAIL:
        return { loading: false, error: action.payload }
      case TICKET_DELETE_HEADING_RESET:
        return {}
      default:
        return state
    }
  }

  export const ticketHeading2CreateReducer = (state = {}, action) => {
    switch (action.type) {
      case TICKET_CREATE_HEADING2_REQUEST:
        return { loading: true }
      case TICKET_CREATE_HEADING2_SUCCESS:
        return { loading: false, success: true }
      case TICKET_CREATE_HEADING2_FAIL:
        return { loading: false, error: action.payload }
      case TICKET_CREATE_HEADING2_RESET:
        return {}
      default:
        return state
    }
  }


  export const ticketHeading2DeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case TICKET_DELETE_HEADING2_REQUEST:
        return { loading: true }
      case TICKET_DELETE_HEADING2_SUCCESS:
        return { loading: false, success: true }
      case TICKET_DELETE_HEADING2_FAIL:
        return { loading: false, error: action.payload }
      case TICKET_DELETE_HEADING2_RESET:
        return {}
      default:
        return state
    }
  }



  export const ticketUpdateReducer = (state = { ticket: {} }, action) => {
    switch (action.type) {
      case TICKET_UPDATE_REQUEST:
        return { loading: true }
      case TICKET_UPDATE_SUCCESS:
        return { loading: false, success: true, ticket: action.payload }
      case TICKET_UPDATE_FAIL:
        return { loading: false, error: action.payload }
      case TICKET_UPDATE_RESET:
        return { ticket: {} }
      default:
        return state
    }
  }


  export const ticketDeleteallReducer = (state = { ticket: {} }, action) => {
    switch (action.type) {
      case TICKET_DELETEALL_REQUEST:
        return { loading: true }
      case TICKET_DELETEALL_SUCCESS:
        return { loading: false, success: true, ticket: action.payload }
      case TICKET_DELETEALL_FAIL:
        return { loading: false, error: action.payload }
        default:
          return state
    }
  }
  

  export const ticketDuplicateReducer = (state = { ticket: {} }, action) => {
    switch (action.type) {
      case TICKET_DUPLICATE_REQUEST:
        return { loading: true }
      case TICKET_DUPLICATE_SUCCESS:
        return { loading: false, success: true, ticket: action.payload }
      case TICKET_DUPLICATE_FAIL:
        return { loading: false, error: action.payload }
      case TICKET_DUPLICATE_RESET:
          return { ticket: {} }
      default:
        return state

    }
  }