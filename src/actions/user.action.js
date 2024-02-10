import axios from "axios";

// User Login Management
export const authUser = (user, rememberMe, navigate) => {
  return async (dispatch) => {
    try {
      await axios
        .post("http://localhost:3001/api/v1/user/login", user)
        .then((res) => {
          let token = res.data.body.token;

          switch (res.data.status) {
            case 200:
              dispatch({
                type: "LOGIN_SUCCESS",
                payload: user,
              });

              if (rememberMe === true) {
                localStorage.setItem("token", token);
              } else {
                sessionStorage.setItem("token", token);
              }

              dispatch(userData());
              navigate("/profile");
          }
        });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
    }
  };
};

// Use Profile Data Management
export const userData = () => {
  return async (dispatch) => {
    try {
      await axios
        .post(
          "http://localhost:3001/api/v1/user/profile",
          {},
          {
            headers: {
              Authorization: `Bearer ${
                localStorage.getItem("token") || sessionStorage.getItem("token")
              }`,
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            dispatch({
              type: "PROFILE_USER_SUCCESS",
              payload: res.data.body,
            });
          } else {
            console.error(
              "Erreur lors de la récupération des données utilisateur."
            );
          }
        });
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  };
};

// User data Update Management
export const updateUserData = (userName) => {
  return async (dispatch) => {
    try {
      await axios
        .put(
          "http://localhost:3001/api/v1/user/profile",
          { userName },
          {
            headers: {
              Authorization: `Bearer ${
                localStorage.getItem("token") || sessionStorage.getItem("token")
              }`,
            },
          }
        )
        .then((res) => {
          dispatch({ type: "UPDATE_PROFILE_USER", payload: res.data.body });
        });
    } catch (error) {
      console.error(error);
    }
  };
};

// User LogOut Management
export const logOut = (navigate) => {
  return async (dispatch) => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    dispatch({
      type: "USER_LOGOUT",
    });
    navigate("/login");
  };
};
