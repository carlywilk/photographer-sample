
import cameraImage from "../../assets/images/camera.jpg";

import "./About.scss";

export function About() {
    return (
        <>
            <h1 className="about__title">About the Photographer</h1>
            <div className="about__content-container">
                <img className="about__image" src={cameraImage} alt="about image" />
                <p className="about__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto accusamus sit tempore quam maiores cumque itaque cum, nemo totam beatae. Magnam magni officiis qui voluptatem eveniet, autem mollitia aut nulla?</p>
            </div>
        </>
    )
}