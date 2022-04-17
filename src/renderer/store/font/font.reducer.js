export const types = {
  SIZE_SET: 'FONT/SIZE_SET',
};

export const initialState = {
  size: 22,
  sizeMin: 2,
  sizeMax: 40,
};

export default function reducer(state = {...initialState}, action) {
  switch (action.type) {

    case types.SIZE_SET:
      return {
        ...state,
        size: (action.data < state.sizeMin || action.data > state.sizeMax) ? state.size : action.data,
      };

    default:
      return state;
  }
}
