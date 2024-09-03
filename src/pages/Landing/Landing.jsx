
import { Header } from "../../components/Header/Header";

import exampleImage from "../../assets/images/test-image.jpeg";

import "./Landing.scss";

export function Landing() {
    return (
        <div className="landing">
        <Header />
        <h3 className="landing__title">Landing Page</h3>
        <img className="landing__image" src={exampleImage} alt=""/>
        </div>
    )
}