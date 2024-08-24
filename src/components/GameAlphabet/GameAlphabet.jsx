function GameAlphabet(){
    const alphabet = new Array(26).fill(0).map((element,index) => {
        return String.fromCharCode(65+index);
    })

    return (
        <div className="flex flex-wrap size-100">
            {
                alphabet.map((char,index) => {
                    return (
                        <button 
                            key='{char-${index}}' 
                            className="inline-block mx-1 bg-slate-500 border-2 p-5 text-3xl"
                        >{char}</button>
                    );
                })
            }
        </div>
    );
    
}

export default GameAlphabet;