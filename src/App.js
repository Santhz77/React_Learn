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

    const characters = [
      {
          name: 'Charlie',
          job: 'Janitor',
      },
      {
          name: 'Mac',
          job: 'Bouncer',
      },
      {
          name: 'Dee',
          job: 'Aspring actress',
      },
      {
          name: 'Dennis',
          job: 'Bartender',
      },
  ]
    return (
      <div className="App">
        <h1>Jobs CURD</h1>
        <Table data={characters}/>
      </div>
    )
  }
}


export default App;
