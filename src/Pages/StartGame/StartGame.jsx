import { Link } from "react-router-dom";
function StartGame(){
    return(
        <div>
            <h1> Start Game </h1>
            <Link to={'/Play'}> Play Game </Link>
        </div>
    );
}

export default StartGame;