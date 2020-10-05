const defaultState = {
  selected_classes: [],
};

const buttonReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SCHEDULE_BUTTON":
      console.log("Selected Action from reducer: ", action.payload);
      return {
        ...state,
        selected_classes: [...state.selected_classes, action.payload],
      };
    default:
      return state;
  }
};

export default buttonReducer;
