import { Link } from "react-router-dom";

import "./NavBox.scss";

export function NavBox() {
    return (
        <div className="navbox">
            <h1 className="navbox__title">Photographer Site</h1>
            <nav className="navbox__menu">
                <Link className="navbox__link" to="/">
                    <p className="navbox__button">Home</p>
                </Link>
                <Link className="navbox__link" to="/about">
                    <p className="navbox__button">About</p>
                </Link>
                <Link className="navbox__link" to="/contact">
                    <p className="navbox__button">Contact</p>
                </Link>
            </nav>
        </div>
    )
}