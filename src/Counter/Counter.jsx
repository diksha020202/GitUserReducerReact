
      import React, { useReducer } from "react";

      const initState = {
        counter: 0,
        noOfClicks: 0
      };
      
      const counterActions = {
        increment: "increment",
        decrement: "decrement",
        reset: "reset"
      };
      
      const reducer = (state, action) => {
        console.log(`reducer called, action is ${action.type}`);
        console.log(`current state is `, state);
        // action
        // action is an object {}
        // a key called type
        // a key called payload
        switch (action.type) {
          case counterActions.increment: {
            return {
              ...state,
              counter: state.counter + 1,
              noOfClicks: state.noOfClicks + 1
            };
          }
          case counterActions.decrement: {
            return {
              ...state,
              counter: state.counter - 1,
              noOfClicks: state.noOfClicks + 1
            };
          }
          case counterActions.reset:
            return {
              ...initState
            };
          default:
            return state;
        }
      };
      
      function Counter() {
        const [state, dispatch] = useReducer(reducer, initState);
      
        return (
          <div>
            <h2>Count:{state.counter}</h2>
            <h2>No of clicks:{state.noOfClicks}</h2>
            <div>
              <button
                onClick={() =>
                  dispatch({
                    type: counterActions.increment
                  })
                }
              >
                ADD
              </button>
              <button
                onClick={() =>
                  dispatch({
                    type: counterActions.decrement
                  })
                }
              >
                REDUCE
              </button>
              <button
                onClick={() =>
                  dispatch({
                    type: counterActions.reset
                  })
                }
              >
                RESET
              </button>
            </div>
          </div>
        );
      }
      
      export default Counter;
      