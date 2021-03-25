import "./NotFound404.scss";
import {Link} from "react-router-dom";

function NotFound404(){
    return(
        <div className="NotFound404">
            <h1>Сторінка не існує</h1>
            <Link to="/">Повернутися на головну</Link>
        </div>
    );
}

export default NotFound404;