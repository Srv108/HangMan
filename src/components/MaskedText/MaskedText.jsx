function MaskedText({ text, usedLetters }) {

    function getAllCharacters(word, usedLetters) {
        usedLetters = usedLetters.map(letter => { 
            return letter.toUpperCase()}
        );
        const guessedLetters = new Set(usedLetters);
        const rightGuessedLetters = word.toUpperCase().split('').map(char=>{
            if(guessedLetters.has(char)){
                return char;
            }
            return '_';
        })
        console.log(rightGuessedLetters);
        return rightGuessedLetters.join('');
    }
    
    const letters = getAllCharacters(text, usedLetters).split('');
    console.log(`Letters to Render: ${letters}`); // Debugging output

    return (
        <>
            {
                letters.map((letter,index) => {
                    return (
                    <span 
                        key='{letter-${index}}'
                        className="inline-block mx-1 "
                    > {letter}</span>
                    );
                })
            }
        </>
    );
}

export default MaskedText;

