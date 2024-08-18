import TextInputForm from "./components/TextInputForm/TextInputForm";

function App(){
  return (
    <div>
      <h1>Welcome to the HangMan! </h1>
      <TextInputForm onSubmit = {(value) => {console.log(value)}} />
    </div>
  )
}
export default App;