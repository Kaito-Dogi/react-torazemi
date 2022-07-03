import logo from './logo.svg';
import './App.css';
import Article from './components/Article';

function App() {
  return (
    <Article
      title={'師匠（@akt_prs10）のもとで React 入門します。'}
      content={"がんばるます。"}
    />
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
