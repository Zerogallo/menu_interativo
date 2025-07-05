import { MdOutlineDeveloperMode } from "react-icons/md";
import "./App.css";
import { SiHomebridge } from "react-icons/si";
import { IoLogoWhatsapp, IoPersonCircle } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
import { GrGallery } from "react-icons/gr";
import { IoIosConstruct } from "react-icons/io";

function App() {
  return (
    <>
      <div className="contents">
        <ul className="menu">
          <li>
            <span>
              <MdOutlineDeveloperMode />
            </span>

            <span>DEV Renan</span>
          </li>
          <li>
            <span>
              <SiHomebridge />
            </span>
            <span>Home</span>
          </li>
          <li>
            <span>
              <IoPersonCircle />
            </span>

            <span>Pref</span>
          </li>
          <li>
            <span>
              <GoProjectSymlink />
            </span>

            <span>Projeto</span>
          </li>
          <li>
            <span>
              <GrGallery />
            </span>

            <span>Galeria</span>
          </li>
          <li>
            <span>
              <IoLogoWhatsapp />
            </span>

            <span>Contato</span>
          </li>
          <li>
            <span>
              <IoIosConstruct />
            </span>

            <span>Configurações</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
