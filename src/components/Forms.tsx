import { useState } from "react";

const Forms = () => {
  const [inputValue, setInputValue] = useState({
    nick: '',
    subMonths: 0,
    avatar: '',
    description: '',
  })
  const handleSubmit = () => {};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value
    })
  }

  return(
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={inputValue.nick} type='text' name='nick' placeholder='nick' />
      <input onChange={handleChange} value={inputValue.subMonths} type='number' name='subMonths' placeholder='subMonths' />
      <input onChange={handleChange} value={inputValue.avatar} type='text' name='avatar' placeholder='avatar' />
      <textarea onChange={handleChange} value={inputValue.description} name='description' placeholder='description' />
      <button>Guardar nuevo</button>
    </form>

  )
};

export default Forms;