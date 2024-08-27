import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import PlayGame from "./Pages/PlagGame/PlayGame";
import StartGame from "./Pages/StartGame/StartGame";
import HomePage from "./Pages/HomePage/HomePage";

function App(){
  return (
    <>

      
      <Routes>

        <Route path="/play" element={<PlayGame/>} />

        <Route path="" element= {<StartGame/>} />
        <Route path="*" element= {<div>Page Not Found</div>} />
      </Routes>

    </>
  );
}
export default App;