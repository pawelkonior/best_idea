import "../partials/Card.scss";

import salata from "../assets/images/salata.png";
import timer from "../assets/timer.svg";

function Card() {
    return (
        <>
            <div className="product-card">
                <div>
                    <img className="product-image" src={salata} alt="Sałata" />
                </div>
                <div className="product-info">
                    <div className="product-name">Sałata</div>
                    <div className="product-subtext">
                        <img src={timer} alt="" className="subtext-icon" />
                        <span className="subtext-text">
                            Koniec przydatności: 5 dni
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
