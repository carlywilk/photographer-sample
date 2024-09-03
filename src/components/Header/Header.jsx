import { Link } from "react-router-dom";

import "./Header.scss";

export function Header() {
    return (
        <div className="header">
            <h1 className="header__title">Ella Parker Photography</h1>
            <nav className="header__nav">
                <Link className="header__link" to="/">
                    <p className="header__button">Home</p>
                </Link>
                <Link className="header__link" to="/about">
                    <p className="header__button">About</p>
                </Link>
                <Link className="header__link" to="/series">
                    <p className="header__button">Series</p>
                </Link>
                <Link className="header__link" to="/contact">
                    <p className="header__button">Contact</p>
                </Link>
            </nav>
        </div>
    )
}