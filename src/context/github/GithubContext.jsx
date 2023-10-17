import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;

// eslint-disable-next-line react/prop-types
export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Set loading
  const setLoading = () => dispatch({ type: 'SET_LOADING'});

  // Get initial users (testing purposes)
  const fetchUsers = async () => {
    setLoading();
    const response = await fetch(
      `${GITHUB_URL}/users`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );

    const data = await response.json();

    dispatch({
      type: 'GET_USERS',
      payload: data
    })
  };

  

  return (
    <GithubContext.Provider 
        value={{
            users: state.users,
            loading: state.loading,
            fetchUsers
        }}
    >
        {children}
    </GithubContext.Provider>
  )
};


export default GithubContext
