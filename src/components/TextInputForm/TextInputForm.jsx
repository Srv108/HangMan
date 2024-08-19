// Presentation Component

import { useState } from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({handleFormSubmit,handleTextInputChange,value,inputType,setInputType}){

    
    return (
        <form className="flex" action="" onSubmit={handleFormSubmit}>
            <div className="mr-2 flex-1">
                <TextInput
                    label = "Enter a phrase or a word"
                    type = {inputType}
                    value = {value}
                    onChange = {handleTextInputChange}
                />
                <Button 
                    styleType="warning"
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