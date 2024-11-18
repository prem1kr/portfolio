import { getImageUrl } from "../../utils";
import Styles from "./Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={Styles.navbar}>
            {/* Title / Brand */}
            <a className={Styles.titles} href="/">Portfolio</a>

            {/* Menu */}
            <div className={Styles.menu}>
                {/* Menu Toggle Button */}
                <img
                    className={Styles.menuBtn}
                    src={
                        menuOpen
                            ? getImageUrl("nav/closeIcon.png")
                            : getImageUrl("nav/menuIcon.png")
                    }
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />

                {/* Menu Items */}
                <ul
                    className={`${Styles.menuItems} ${
                        menuOpen ? Styles.menuOpen : ""
                    }`} onClick={()=>setMenuOpen(false)} 
                >
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
