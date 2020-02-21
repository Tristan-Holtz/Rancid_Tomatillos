export const Movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      console.log(action.movies);
      return action.movies;
    default:
      return state;
  }
};
