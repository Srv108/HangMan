import { Link, useLocation } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";
import { useState, useEffect } from "react";
import GameAlphabet from "../../components/GameAlphabet/GameAlphabet";
import Hangman from "../../components/Hangman/Hangman";

function PlayGame(){
    const location = useLocation();
    const wordSelected = location.state?.wordSelected; 

    const [step, setStep] = useState(0);
    const [usedLetters, setUsedLetters] = useState([]);
    const [isGameOver, setIsGameOver] = useState(false);
    const [isWinner, setIsWinner] = useState(false);

    useEffect(() => {
        if (step > 6) {
            setIsGameOver(true);
            setIsWinner(false);
        } else if (wordSelected.toUpperCase().split('').every(letter => usedLetters.includes(letter))) {
            setIsGameOver(true);
            setIsWinner(true);
        }
    }, [step, usedLetters, wordSelected]);

    function handleLetterClick(letter){
        if(wordSelected.toUpperCase().includes(letter)){
            setUsedLetters([...usedLetters, letter]);
            console.log("Guessed Letter is Correct");
        } else {
            setStep(step + 1);
            setUsedLetters([...usedLetters, letter]);
            console.log("Guessed Letter is InCorrect");
        }
    }

    function closeModal() {
        setIsGameOver(false);
    }

    return (
        <div className="p-6 max-w-screen-lg mx-auto bg-base-200 shadow-xl rounded-lg">
            <MaskedText 
                text={wordSelected} 
                usedLetters={usedLetters}
            />
            <input
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]" 
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
                    to="/" 
                    className="text-lg text-secondary hover:underline">
                    Start Game
                </Link>
            </div>

            {isGameOver && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-base-200 p-6 rounded-lg shadow-xl text-center">
                        <h2 className="text-2xl font-bold text-primary">{isWinner ? "Congratulations! 🎉🎉" : "Game Over!"}</h2>
                        <p className="my-4 text-lg">{isWinner ? "You won the game!" : "Better luck next time! "}</p>
                        <button 
                            onClick={closeModal} 
                            className="bg-primary text-white px-4 py-2 rounded-md shadow-md hover:bg-secondary">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PlayGame;
