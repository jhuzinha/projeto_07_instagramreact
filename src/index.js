import ReactDOM from "react-dom";
import App from "./App";

function Instagram(){
    return(
        <div>
            <App />
        </div>
    )
}


ReactDOM.render(<Instagram />, document.querySelector(".root"));