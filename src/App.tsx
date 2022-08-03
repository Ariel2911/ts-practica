import { useEffect, useRef, useState } from 'react';
import './App.css';
import Forms from './components/Forms';
import List from './components/List';
import { Sub } from '../types';

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

interface AppState {
  subs: Sub[]
  newSubNumber: number
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubNumber, setNewSubNumber] = useState<AppState['newSubNumber']>(0)
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    setSubs(INICIAL_STATE)
  },[])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
    setNewSubNumber(n => n+1);
  }

  return (
    <div className='App' ref={divRef} >
      <h1>Subs</h1>
      <List subs={subs} />
      New sub: {newSubNumber}
      <Forms onNewSub={handleNewSub} />
    </div>
  )
}

export default App


