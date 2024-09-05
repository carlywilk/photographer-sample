import { Link } from "react-router-dom";

import igIcon from "../../assets/icons/instagram.svg";
import linkedInIcon from "../../assets/icons/linkedin.svg";
import emailIcon from "../../assets/icons/email.svg";

import "./NavBox.scss";

export function NavBox() {
    return (
        <div className="navbox">
            <Link className="navbox__link" to="/">
                <h1 className="navbox__title">Photographer</h1>
            </Link>
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
            <div className="navbox__socials">
                <a className="navbox__link--animated" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <img className="navbox__icon" src={igIcon} alt="" />
                </a>
                <a className="navbox__link--animated" href="https://www.linkedin.com/in/carly-wilk/" target="_blank" rel="noopener noreferrer">
                    <img className="navbox__icon" src={linkedInIcon} alt="" />
                </a>
                <a className="navbox__link--animated" href={`mailto:carly.wilk.dev@gmail.com`}>
                    <img className="navbox__icon" src={emailIcon} alt="" />
                </a>
            </div>
        </div>
    )
}