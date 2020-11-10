import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleDown } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <div className="header-nav">
        <nav className="navBar">
          <ul class="menu">
            <li class="logo">
              <a href="#">Photon</a>
            </li>
            <li class="item">
              <a href="#">
                Categorias <FontAwesomeIcon icon={faAngleDown} />
              </a>
              <ul class="submenu">
                <li class="subitem">
                  <a href="#">Item 1</a>
                </li>
                <li class="subitem">
                  <a href="#">Item 2</a>
                </li>
                <li class="subitem">
                  <a href="#">Item 3</a>
                </li>
              </ul>
            </li>
            <li class="item">
              <a href="#">Season Pass</a>
            </li>
            <li class="item">
              <a href="#">Torneos</a>
            </li>
            <li class="item">
              <a href="#">Eventos</a>
            </li>
            <li class="item">
              <a href="#">Ayuda</a>
            </li>
            <li class="item button">
              <a href="#">Registrarse</a>
            </li>
            <li class="item button secondary">
              <a href="#">Ingresar</a>
            </li>
            <li class="menuBars">
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
