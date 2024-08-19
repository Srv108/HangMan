import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import TextInputForm from "./components/TextInputForm/TextInputForm";
import PlayGame from "./Pages/PlagGame/PlayGame";
import StartGame from "./Pages/StartGame/StartGame";
import TextInput from "./components/TextInput/TextInput";
import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer";

function App(){
  return (
    <>

      <h1 className="font-semibold text-3xl"> Welcome to the HangMan </h1>
      <TextInputFormContainer
        onSubmit={(value) => {console.Console.log("Value Coming from hidden form is ",value)}}
      />
      {/* <h1>Welcome to the HangMan</h1>
      <Routes>

        <Route path="/play" element={<PlayGame/>} />

        <Route path="/Start" element= {<StartGame/>} />
        <Route path="*" element= {<div>Page Not Found</div>} />
      </Routes> */}

    </>
  );
}
export default App;