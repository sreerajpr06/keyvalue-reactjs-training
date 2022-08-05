import "../styles/SideNav.css"
import logo from '../assets/kv logo.png';
import listImg from "../assets/List.png";

const SideNav = () => {
    return (
        <aside class="sidenav">
            <img src={logo} alt="Logo" />
            <nav>
                <a href="/">
                    <div class="sidenav-element">
                        <img src={listImg} alt="Employee List" />
                        <p>Employee list</p>
                    </div>
                </a>
            </nav>
        </aside>
    )
}

export default SideNav;