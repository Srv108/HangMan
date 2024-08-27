// Presentation Component

import { useState } from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({handleFormSubmit,handleTextInputChange,value,inputType,setInputType}){

    
    return (
        <form className="flex items-center space-x-4 p-4 bg-base-200 rounded-lg shadow-lg justify-center" onSubmit={handleFormSubmit}>
            <div className="flex flex-1 items-center justify-between">
                {/* <h1> Enter a Word To Start The Game :     </h1> */}
                <TextInput
                    // label="Enter a word to start:"
                    type={inputType}
                    value={value}
                    onChange={handleTextInputChange}
                    className="input input-bordered input-primary w-full max-w-xs mb-4 m-2"
                />
                <Button
                    styleType="warning"
                    text={inputType === 'password' ? "Show" : "Hide"}
                    onClickHandler={() => setInputType(inputType === "password" ? "text" : "password")}
                    className="btn btn-warning btn-sm "
                />
            </div>
            <Button
                buttonType="submit"
                text="OK"
                className="btn btn-primary btn-lg"
            />
        </form>

    );
}

export default TextInputForm;