import { useState } from "react";
import { Sub } from '../../types';

interface FormState {
  inputValue: Sub
}

interface FormProps {
  onNewSub: (newSub: Sub) => void
}

const Forms = ({ onNewSub }: FormProps) => {
  const [inputValue, setInputValue] = useState<FormState['inputValue']>({
    nick: '',
    subMonths: 0,
    avatar: '',
    description: '',
  })
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSub(inputValue);
    handleClear();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value
    })    
  }

  const handleClear = () => {
    setInputValue({
      nick: '',
      subMonths: 0,
      avatar: '',
      description: '',
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={inputValue.nick} type='text' name='nick' placeholder='nick' />
      <input onChange={handleChange} value={inputValue.subMonths} type='number' name='subMonths' placeholder='subMonths' />
      <input onChange={handleChange} value={inputValue.avatar} type='text' name='avatar' placeholder='avatar' />
      <textarea onChange={handleChange} value={inputValue.description} name='description' placeholder='description' />
      <button type='button'>Borrar formulario</button>
      <button type='submit'>Guardar nuevo</button>
    </form>

  )
};

export default Forms;