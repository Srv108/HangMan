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

    
export default getAllCharacters;