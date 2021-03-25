import "./Autos.scss";
import {useParams} from "react-router-dom";

  function AutosItem() {
      let {autoId} = useParams()
      return (
          <div className="AutosItem">
              <h1>Сторінка автівок</h1>
              <div className="autos-container">
                  У вашого авто id = {autoId};
              </div>
          </div>
      )
  }

  export default AutosItem;