//import logo from './logo.svg';
//import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js asdadasd</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React              wqeqweqweqwe
//         </a>
//       </header>
//     </div>
//   );
// }

import React, {Component} from 'react'
import Table from "./Table"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
        <Table/>
      </div>
    )
  }
}


export default App;