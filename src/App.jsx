import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import TextInputForm from "./components/TextInputForm/TextInputForm";
import PlayGame from "./Pages/PlagGame/PlayGame";
import StartGame from "./Pages/StartGame/StartGame";
import HomePage from "./Pages/HomePage/HomePage";
import TextInput from "./components/TextInput/TextInput";
import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer";

function App(){
  return (
    <>

      
      <Routes>

        <Route path="/play" element={<PlayGame/>} />

        <Route path="/Start" element= {<StartGame/>} />
        <Route path="/Home" element= {<HomePage/>} />
        <Route path="*" element= {<div>Page Not Found</div>} />
      </Routes>

    </>
  );
}
export default App;