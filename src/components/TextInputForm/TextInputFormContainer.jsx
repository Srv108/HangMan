// Container Component

import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer({onSubmit}){
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

    

    return(
        <TextInputForm
            // calling Presentation Lawyer
            handleFormSubmit = {handleFormSubmit}
            handleTextInputChange = {handleTextInputChange}
            value = {x}
            inputType = {inputType}
            setInputType = {setInputType}
        />
    );
}

export default TextInputFormContainer;