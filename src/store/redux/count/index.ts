import { SETCOUNT, ActionsTypes, setCount } from './actions';

const reducer = (state = 0, action: ActionsTypes): number => {
  switch (action.type) {
    case SETCOUNT:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
export { setCount };
