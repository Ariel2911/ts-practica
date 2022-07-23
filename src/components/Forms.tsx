const Forms = () => {
  const handleSubmit = () => {};

  return(
    <form onSubmit={handleSubmit}>
      <input type='text' name='nick' placeholder='nick' />
      <input type='text' name='subMonths' placeholder='subMonths' />
      <input type='text' name='avatar' placeholder='avatar' />
      <input type='text' name='description' placeholder='description' />
      <button>Guardar nuevo</button>
    </form>

  )
};

export default Forms;