function GameAlphabet(){
    const alphabet = new Array(26).fill(0).map((element,index) => {
        return String.fromCharCode(65+index);
    })

    return (
        <div>
            {
                alphabet.map((char,index) => {
                    return <button key='{char-${index}}' className="inline-block mx-1">{char}</button>
                })
            }
        </div>
    );
    
}

export default GameAlphabet;