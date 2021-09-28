
  export const fetchTerms = () => {
      return (dispatch) => {
        fetch("http://localhost:3000/terms")
        .then(resp => resp.json())
        .then(termData => dispatch({type: "FETCH_TERMS", payload: termData}))
      }
  }
