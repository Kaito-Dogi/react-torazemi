import logo from './logo.svg';
import './App.css';
import {Article} from './components/index';
import { useEffect, useState } from 'react';

function App() {
  const baseUrl = 'https://api.github.com/users/';
  const userId = 'Kaito-Dogi';

  const [name, setName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  const fetchUser = (userId) => {
    fetch(`${baseUrl}${userId}`)
      .then(res => res.json())
      .then(data => {
          console.log(data);
          setName(data.name);
          setAvatarUrl(data.avatar_url);
        }
      )
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchUser(userId);
  }, []);

  return (
    <>
      <h1>{name}</h1>
      <img src={avatarUrl} width={300} />
      <Article
        title={'師匠（@akt_prs10）のもとで React 入門します。'}
        content={"がんばるます。"}
      />
    </>
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
