import { Sub } from '../../types';
import useNewSubForm from "../hooks/useNewSubForm";

interface FormProps {
  onNewSub: (newSub: Sub) => void
};

const Forms = ({ onNewSub }: FormProps) => {
  const [inputValue, dispatch] = useNewSubForm();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSub(inputValue);
    handleClear();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    dispatch({
      type: 'change-value',
      payload: {
        inputName: name,
        inputValue: value,
      }
    }); 
  };

  const handleClear = () => {
    dispatch({
      type: 'clear'
    });
  };

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