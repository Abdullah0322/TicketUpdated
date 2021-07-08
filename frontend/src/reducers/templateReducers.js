import {
TEMPLATE_LIST_REQUEST,
TEMPLATE_LIST_SUCCESS,
TEMPLATE_LIST_FAIL

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
  