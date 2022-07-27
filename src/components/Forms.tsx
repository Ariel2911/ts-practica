import { useReducer, useState } from "react";
import { Sub } from '../../types';

interface FormState {
  inputValue: Sub
}

interface FormProps {
  onNewSub: (newSub: Sub) => void
}

const INICIAL_STATE = {
  nick: '',
  subMonths: 0,
  avatar: '',
  description: '',
}

type FormReducerAction = {
   type: 'change-value',
   payload: {
    inputName: string
    inputValue: string 
   }
} | {
  type: 'clear'
}

const formReducer = (state: FormState['inputValue'], action: FormReducerAction) => {
  switch(action.type) {
    case 'change-value':
      const {inputName, inputValue} = action.payload
      return {
        ...state,
        [inputName]: inputValue,
      }

    case 'clear':
      return INICIAL_STATE
  }
}

const Forms = ({ onNewSub }: FormProps) => {
  // const [inputValue, setInputValue] = useState<FormState['inputValue']>(INICIAL_STATE)
  const [inputValue, dispatch] = useReducer(formReducer, INICIAL_STATE)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSub(inputValue);
    handleClear();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    dispatch({
      type: 'change-value',
      payload: {
        inputName: name,
        inputValue: value,
      } 
    })
    // setInputValue({
    //   ...inputValue,
    //   [e.target.name]: e.target.value
    // })    
  }

  const handleClear = () => {
    dispatch({
      type: 'clear'
    })
    // setInputValue(INICIAL_STATE)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={inputValue.nick} type='text' name='nick' placeholder='nick' />
      <input onChange={handleChange} value={inputValue.subMonths} type='number' name='subMonths' placeholder='subMonths' />
      <input onChange={handleChange} value={inputValue.avatar} type='text' name='avatar' placeholder='avatar' />
      <textarea onChange={handleChange} value={inputValue.description} name='description' placeholder='description' />
      <button onClick={handleClear} type='button'>Borrar formulario</button>
      <button type='submit'>Guardar nuevo</button>
    </form>

  )
};

export default Forms;