import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initState = {
  loading: true,
  error: false,
  data: null
};

const githubActions = {
  fetch: "fetch",
  success: "success",
  failure: "failure"
};
const githubReducer = (state, action) => {
  switch (action.type) {
    case githubActions.fetch: {
      return {
        ...state,
        loading: true,
        error: false,
        data: null
      };
    }
    case githubActions.success: {
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload
      };
    }
    case githubActions.failure: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
    default:
      return state;
  }
};

function Github() {
  const [{ loading, error, data }, dispatch] = useReducer(
    githubReducer,
    initState
  );

  useEffect(() => {
    dispatch({
      type: githubActions.fetch
    });
    axios({
      url: "https://api.github.com/search/users",
      method: "GET",
      params: {
        q: "masai"
      }
    })
      .then((res) => {
        dispatch({
          type: githubActions.success,
          payload: res.data
        });
      })
      .catch((err) => {
        dispatch({
          type: githubActions.failure
        });
      });
  }, []);
  console.log(data);
  return (
    <div>
      {loading && <div>Loading</div>}
      {error && <div>Error</div>}
      {data?.items.map((item) => (
        <div key={item.id}>{item.login}</div>
      ))}
    </div>
  );
}

export default Github;
