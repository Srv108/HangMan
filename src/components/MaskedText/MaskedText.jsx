import getAllCharacters from "./MaskedTextUtilty";

function MaskedText({ text, usedLetters}) {

    const letters = getAllCharacters(text, usedLetters).split('');
    console.log(`Letters to Render: ${letters}`); // Debugging output


    return (
        <>
            <div className="flex justify-center text-3xl">
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
            </div>
        </>
    );
}

export default MaskedText;

