function App() {

  const handleChange = (e) => {
    e.preventDefault();
    console.log("Outer Clicked!");
  }

  const handleSubmit = () => {

  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" onChange={handleChange} />
      <input type="string" onChange={handleChange} />
      <input type="date" onChange={handleChange} />
      <button>Click Here</button>
    </form>
  );
}

export default App;
