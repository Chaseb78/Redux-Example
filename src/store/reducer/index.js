const initialState = { weight: 178 + 'lbs.', amount: 0, name: 'Chase' };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_WEIGHT':
      return { ...state, weight: action.value + 'lbs' };
    case 'UPDATE_NAME':
      return { ...state, name: action.value };
    case 'ADD_TEN':
      return { ...state, amount: state.amount + 10 };
    case 'SUB_TEN':
      return { ...state, amount: state.amount - 10 };
    case 'MULTIPLY_BY_TEN':
      return { ...state, amount: state.amount * 10 };
    case 'DIVIDE_BY_TEN':
      return { ...state, amount: state.amount / 10 };

    default:
      return { ...state };
  }
}
