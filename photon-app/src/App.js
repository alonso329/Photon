import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleDown } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <div className="header-nav">
        <nav className="navBar">
          <ul className="menu">
            <li className="logo">
              <a href="#">Photon</a>
            </li>
            <li className="item">
              <a href="#">
                Categorias <FontAwesomeIcon icon={faAngleDown} />
              </a>
              <ul className="submenu">
                <li className="subitem">
                  <a href="#">Item 1</a>
                </li>
                <li className="subitem">
                  <a href="#">Item 2</a>
                </li>
                <li className="subitem">
                  <a href="#">Item 3</a>
                </li>
              </ul>
            </li>
            <li className="item">
              <a href="#">Season Pass</a>
            </li>
            <li className="item">
              <a href="#">Torneos</a>
            </li>
            <li className="item">
              <a href="#">Eventos</a>
            </li>
            <li className="item">
              <a href="#">Ayuda</a>
            </li>
            <li className="item button">
              <a href="#">Registrarse</a>
            </li>
            <li className="item button secondary">
              <a href="#">Ingresar</a>
            </li>
            <li className="menuBars">
              <a href="#">
                <FontAwesomeIcon icon={faBars} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
