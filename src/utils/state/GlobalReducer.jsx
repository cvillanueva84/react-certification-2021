import { theme } from "../theme/theme";

export const initialState = {
  sideBar: true,
  currentTheme: theme.light
};

const GlobalReducer = (state, action) => {
  switch (action.type) {
    // case "ADD_EMPLOYEE": {
    //   const employees = state.employees.concat(action.payload);
    //   localStorage.setItem("employees", JSON.stringify(employees));
    //   return {
    //     ...state,
    //     employees
    //   };
    // }
    case "TOGGLE_SIDEBAR": {
      return {
        ...state,
        sideBar: !state.sideBar,
      };
    }
    case "TOGGLE_THEME": {
      const newThemeKey = state.currentTheme.id === "dark" ? "light" : "dark";
      localStorage.setItem("theme", JSON.stringify(newThemeKey));
      return { ...state, currentTheme: theme[newThemeKey] };
    }
    case "LOAD_FROM_STORAGE": {
      const newThemeKey = JSON.parse(localStorage.getItem("theme")) || [];
      return {
        ...state,
        currentTheme: theme[newThemeKey]
      };
    }
    default:
      return state;
  }
};

export default GlobalReducer;
