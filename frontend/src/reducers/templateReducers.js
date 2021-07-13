import {
TEMPLATE_LIST_REQUEST,
TEMPLATE_LIST_SUCCESS,
TEMPLATE_LIST_FAIL,
TEMPLATE_DETAILS_REQUEST,
TEMPLATE_DETAILS_SUCCESS,
TEMPLATE_DETAILS_FAIL,
TEMPLATE_DELETE_REQUEST,
TEMPLATE_DELETE_SUCCESS,
TEMPLATE_DELETE_FAIL
} from "../constants/templateConstants"


export const templateListReducer = (state = { templates: [] }, action) => {
    switch (action.type) {
      case TEMPLATE_LIST_REQUEST:
        return { loading: true, templates: [] }
      case TEMPLATE_LIST_SUCCESS:
        return {
          loading: false,
          templates: action.payload.templates,
          pages: action.payload.pages,
          page: action.payload.page,
        }
      case TEMPLATE_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  

  export const templateDetailsReducer = (
    state = { template: { } },
    action
  ) => {
    switch (action.type) {
      case TEMPLATE_DETAILS_REQUEST:
        return { ...state, loading: true }
      case TEMPLATE_DETAILS_SUCCESS:
        return { loading: false, template: action.payload }
      case TEMPLATE_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const templateDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case TEMPLATE_DELETE_REQUEST:
        return { loading: true }
      case TEMPLATE_DELETE_SUCCESS:
        return { loading: false, success: true }
      case TEMPLATE_DELETE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
