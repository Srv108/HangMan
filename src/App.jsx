import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import TextInputForm from "./components/TextInputForm/TextInputForm";
import PlayGame from "./Pages/PlagGame/PlayGame";
import StartGame from "./Pages/StartGame/StartGame";

function App(){
  return (
    <>
      <h1>Welcome to the HangMan</h1>
      <Routes>

        <Route path="/play" element={<PlayGame/>} />

        <Route path="/Start" element= {<StartGame/>} />
        <Route path="*" element= {<div>Page Not Found</div>} />
      </Routes>

    </>
  );
}
export default App;