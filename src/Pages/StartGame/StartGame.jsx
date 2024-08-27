
import { Link, useNavigate } from "react-router-dom";
import TextInputForm from "../../components/TextInputForm/TextInputForm";
import TextInputFormContainer from "../../components/TextInputForm/TextInputFormContainer";


function StartGame(){
    const navigate = useNavigate();
    function handleSubmit(value){
        navigate('/Play',{state : {wordSelected : value}});

    }
    return(

        <div>
            <TextInputFormContainer onSubmit={handleSubmit} />
        </div>
    );
}

export default StartGame;