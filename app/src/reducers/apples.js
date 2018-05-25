const apples = (state = "Delicious" , action) => {
  switch(action.type){
    case "CHANGE_APPLES":
      return action.payload;
    default:
      return state;
  }
}

export default apples;