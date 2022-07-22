import { useState } from 'react';
import './App.css';

function App() {
  const [subs, setSubs] = useState([
    {
      nick: 'dapelu',
      subMonths: 3,
      avatar: 'https://i.pravatar.cc/150?u=dapelu',
      descipion: 'Dapelu hace e moredador aveces',
    },
    {
      nick: 'sergio_serrano',
      subMonths: 7,
      avatar: 'https://i.pravatar.cc/150?u=sergio_serrano',
    }
  ]);

  return (
    <div className='App'>
      <h1>Subs</h1>
      <ul>
        {
          subs.map(sub => (
            <li key={sub.nick}>
              <img src={sub.avatar} alt={`avatar para ${sub.nick}`} />
              <h2>{sub.nick}(<small>{sub.subMonths}</small>)</h2>
              <p>{sub.descipion?.substring(0,100)}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
