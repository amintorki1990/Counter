import ActionType from "./ActionType";

const INITIALSTATE = {
  counter: 0,
};

export const counterReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case ActionType.INCEREMENT:
      return { ...state, counter: state.counter + 1 };
    case ActionType.DECREMENT:
      return { ...state, counter: state.counter - 1 };
      
    default:
      return state;
  }
};
