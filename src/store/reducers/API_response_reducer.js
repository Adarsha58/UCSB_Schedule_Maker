const defaultState = {
  response_api: {},
};

const API_response = (state = defaultState, action) => {
  switch (action.type) {
    case "SEARCH_CLICKED":
      return {
        ...state,
        response_api: action.payload,
      };
    default:
      return state;
  }
};

export default API_response;
