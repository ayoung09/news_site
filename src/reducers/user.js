const initialState = {
  user: {}
};

//constants
const SET_USER = 'SET_USER';

//reducer
const userReducer = (prevState, action) => {
  const nextState = Object.assign({}, prevState);

  switch (action.type) {
    case SET_USER:
      nextState.user = Object.assign({}, action.user);
      break;
    default:
      return prevState;
  }
  return nextState;
}

//action-creators
export const setUser = (userObj) => ({
  type: SET_USER,
  user: userObj
});

export default userReducer;
