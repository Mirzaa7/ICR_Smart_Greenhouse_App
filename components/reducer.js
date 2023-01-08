const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD":
      return {
        ...state,
        listOfGreenhouses: [...state.listOfGreenhouses, payload],
      };
    case "ADD_USER":
      return {
        ...state,
        username: payload,
      };
    case "REMOVE":
      let newListOfGreenhouses = state.listOfGreenhouses.filter(
        (item) => item.greenHouseName != payload.greenHouseName
      );
      return {
        ...state,
        listOfGreenhouses: newListOfGreenhouses,
      };

    default:
      return state;
  }
};

export default reducer;
