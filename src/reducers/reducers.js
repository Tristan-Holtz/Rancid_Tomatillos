export const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_DATA':
      return [...state, { movies: action.movies }];
    default:
      return state;
  }
};
