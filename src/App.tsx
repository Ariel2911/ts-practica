import { useEffect, useState } from 'react';
import './App.css';

const INICIAL_STATE = [
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
]

interface Sub {
  nick: string
  avatar: string
  subMonths: number
  description?: string
}

function App() {
  const [subs, setSubs] = useState<Array<Sub>>([]);

  useEffect(()=>{
    setSubs(INICIAL_STATE)
  },[])

  return (
    <div className='App'>
      <h1>Subs</h1>
      <ul>
        {
          subs.map(sub => (
            <li key={sub.nick}>
              <img src={sub.avatar} alt={`avatar para ${sub.nick}`} />
              <h2>{sub.nick}(<small>{sub.subMonths}</small>)</h2>
              <p>{sub.description?.substring(0,100)}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App


