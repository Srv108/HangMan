import { Link, useLocation } from "react-router-dom";

import MaskedText from "../../components/MaskedText/MaskedText";
import { useState } from "react";
import GameAlphabet from "../../components/GameAlphabet/GameAlphabet";

function PlayGame(){
    const location = useLocation();
    const wordSelected = location.state?.wordSelected; 

    const [step, setStep] = useState(0);

    const [usedLetters, setUsedLetters] = useState(['A', 'B', 'C']);

    return(
        <div>
            <h1> Play Game </h1>
            {wordSelected}
            <hr/>

            <MaskedText text={wordSelected} usedLetters={usedLetters}/>

            <GameAlphabet />

            <Link to={'/Start'}> Start Game </Link>
        </div>
    );
}

export default PlayGame;