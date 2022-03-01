import axios from "axios";

export const getAllMeals = () => (dispatch) => {
  dispatch({ type: "GET_MEALS_REQUEST" });

  try {
    const res = axios.get("/api/meals/getmeals");
    console.log(res);
    dispatch({ type: "GET_MEALS_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "GET_MEALS_FAILED", payload: error });
  }
};
