import TextInputFormContainer from "../../components/TextInputForm/TextInputFormContainer";
import { Link } from "react-router-dom";
function HomePage(){
    return (
        <div>
            <h1 className="font-semibold text-3xl"> Welcome to the HangMan </h1>
            <TextInputFormContainer
                onSubmit={(value) => {console.Console.log("Value Coming from hidden form is ",value)}}
            />
            <Link to="/Start">Home Page</Link>
        </div>
    );
}
export default HomePage;