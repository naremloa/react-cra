import { SETCOUNT, actionsTypes, setCount } from './actions'

const reducer = (state = 0, action: actionsTypes): number => {
  switch(action.type) {
    case SETCOUNT:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
export { setCount }