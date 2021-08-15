const types = {
  setSearchTerm: 'setSearchTerm',
  setTheme: 'setTheme',
};
const initialStore = {
  searchTerm: 'Love of lesbian',
  theme: 'light',
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case types.setSearchTerm:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case types.setTheme:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
export { initialStore, types };
export default storeReducer;
