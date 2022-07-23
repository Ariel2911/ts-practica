import { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';

const INICIAL_STATE = [
  {
    nick: 'maxi_dev',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=maxi_dev',
    descipion: 'Dapelu hace e moredador aveces',
  },
  {
    nick: 'dev_jony',
    subMonths: 7,
    avatar: 'https://i.pravatar.cc/150?u=dev_jony',
  }
]

interface Sub {
  nick: string
  avatar: string
  subMonths: number
  description?: string
}

interface AppState {
  subs: Sub[]
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);

  useEffect(()=>{
    setSubs(INICIAL_STATE)
  },[])

  return (
    <div className='App'>
      <h1>Subs</h1>
      <List subs={subs} />
    </div>
  )
}

export default App


