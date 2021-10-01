import './App.css';
import { connect } from 'react-redux';
import { useEffect } from 'react';


import { fetchTerms } from './actions/termActions.js';
import TermContainer from './components/TermContainer.js';

function App(props) {

    useEffect(
      () => {
        props.fetchTerms()
      }, []
    )


  // function componentDidMount() {
  //   fetch("http://localhost:3000/terms")
  //   .then(resp => resp.json())
  //   .then(data => console.log(data))
  // }
  // componentDidMount()

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>


      <TermContainer />


    </div>
  );
}

export default connect(null, { fetchTerms })(App);
