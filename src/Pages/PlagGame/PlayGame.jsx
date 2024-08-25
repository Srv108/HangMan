import { Link, useLocation } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";
import { useState } from "react";
import GameAlphabet from "../../components/GameAlphabet/GameAlphabet";
import Hangman from "../../components/Hangman/Hangman";

function PlayGame(){
    const location = useLocation();
    const wordSelected = location.state?.wordSelected; 

    const [step, setStep] = useState(0);

    const [usedLetters, setUsedLetters] = useState([]);

    function handleLetterClick(letter){
        if(wordSelected.toUpperCase().includes(letter)){
            console.log("Guessed Letter is Correct");
        }else{
            console.log("Guessed Letter is InCorrect");
            setStep(step+1);
        }
        setUsedLetters([...usedLetters,letter]);
        
    }

    
    
    return (
        <div className="p-6 max-w-screen-lg mx-auto bg-base-200 shadow-xl rounded-lg">


            {/* <h1 className="text-center text-4xl font-bold mb-6 text-primary">{wordSelected}</h1> */}

            <MaskedText 
                text={wordSelected} 
                usedLetters={usedLetters}

            />

            <hr className="my-8 border-primary" />

            <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 my-8">
                <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
                    <div className="w-full flex flex-wrap justify-center bg-neutral p-4 rounded-lg shadow-md">
                        <GameAlphabet 
                            text={wordSelected}
                            usedLetters={usedLetters}
                            onLetterClick={handleLetterClick}
                        />
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center">
                    <Hangman step={step} />
                </div>
            </div>

            <div className="text-center mt-6">
                <Link 
                    to="/Start" 
                    className="text-lg text-secondary hover:underline">
                    Start Game
                </Link>
            </div>
        </div>
    );
}

export default PlayGame;