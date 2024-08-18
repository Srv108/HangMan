import { useState } from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm(onSubmit){

    const [x,setValue] = useState('');
    const [inputType,setInputType] = useState('password');

    function handleFormSubmit(event){
        event.preventDefault();
        console.log("************");
        // console.log(event.target.children[0].children[1].value);
        console.log("form submitted",x);
        onSubmit ?.(x);
    }
    function handleTextInputChange(event){
        console.log("Text input changed");
        console.log(event.target);
        console.log(event.target.value);
        setValue(event.target.value);
    }

    // function toggleTextInputChange(){
    //     if(type === "password") setType("text");
    //     else setType("password");
    // }

    return (
        <form className="flex" action="" onSubmit={handleFormSubmit}>
            <div className="mr-2 flex-1">
                <TextInput
                    label = "Enter a phrase or a word"
                    type = {inputType}
                    onChange = {handleTextInputChange}
                />
                <Button 
                    styleType='warning'
                    text={inputType === 'password' ? "Show" : "Hide"}
                    onClickHandler={() => setInputType(inputType === "password" ? "text" : "password")}
                />
            </div>
                <Button
                    buttonType = "submit"
                    text = "ok"
                />
        </form>


    );
}

export default TextInputForm;