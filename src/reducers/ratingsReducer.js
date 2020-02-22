export const ratingsReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_RATINGS':
      return action.ratings;
    default:
      return state;
  }
}