const initialState = {
  userProfile: "",
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        error: null,
      };

    case "LOGIN_FAILURE":
      return {
        ...state,
        error: "Identifiant ou mot de passe incorrect",
      };

    case "PROFILE_USER_SUCCESS":
      return {
        ...state,
        userProfile: action.payload,
      };

    case "UPDATE_PROFILE_USER":
      return {
        ...state,
        userProfile: action.payload,
      };

    case "USER_LOGOUT":
      return {
        ...state,
        userProfile: "",
        error: null,
      };
    default:
      return state;
  }
};

export default userReducer;
