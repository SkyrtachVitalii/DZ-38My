import './AsideMenu.scss';
import {NavLink} from "react-router-dom";

function AsideMenu() {
  return (
    <div className="AsideMenu">
      <div className="AsideMenu__List">
        <li className="AsideMenu__Item"><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
        <li className="AsideMenu__Item"><NavLink to="/autos" exact activeClassName="active">Autos</NavLink></li>
        <li className="AsideMenu__Item"><NavLink to="/contacts" exact activeClassName="active">Contacts</NavLink></li>
        <li className="AsideMenu__Item"><NavLink to="/cabinet" exact activeClassName="active">Cabinet</NavLink></li>
        <li className="AsideMenu__Item"><NavLink to="/notFound" exact activeClassName="active">404</NavLink></li>
      </div>
    </div>
  );
}

export default AsideMenu;