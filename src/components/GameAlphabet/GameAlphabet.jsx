const alphabet = new Array(26).fill(0).map((element,index) => {
    return String.fromCharCode(65+index);
})


function GameAlphabet({text,usedLetters,onLetterClick}){

    
    const originalLetter = new Set(text.toUpperCase().split(''));
    const selectedLetter = new Set(usedLetters.join('').toUpperCase().split(''));
    

    // console.log(text);
    // console.log(usedLetters);

    const buttonStyle = function(letter){
        if(selectedLetter.has(letter)){
            return `${originalLetter.has(letter) ? `bg-green-600 border-green-700 text-white shadow-inner` : `bg-red-600 border-red-700 text-white shadow-inner cursor-not-allowed`}`
        }else{
            return `bg-yellow-400 border-gray-900 text-black hover:bg-yellow-300 active:bg-yellow-500 shadow-lg hover:border-gray-700`;
        }
    }

    const handleClick = function (event){
        console.log(event.target.value);
        const character = event.target.value;
        onLetterClick?.(character);
    }


    const Button = alphabet.map((letter,index) => {
        return(
            <button
                key = {'button-${letter}'}
                value = {letter}
                disabled = {selectedLetter.has(letter)}
                onClick = {handleClick}
                className = {`h-12 w-12 m-1 rounded-md border-4 font-bold text-xl transition-all duration-150 ${buttonStyle(letter)}`}
            >
                {letter}
            </button>
        )
    })



    return(
        <>
            {Button}
        </>
    );
    
}

export default GameAlphabet;