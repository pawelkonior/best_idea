import "../partials/Card.scss";


import salata from "../assets/salata.png";
import timer from "../assets/timer.svg";


function Card() {
    return (
        <>
            <div className="header">
                <div className="header-subtext">Twoje produkty</div>
                <button className="add-button">+</button>
            </div>
            <div className="product-card">
                <div>
                    <img
                        className="product-image"
                        src={salata}
                        alt="Sałata"
                    />
                </div>
                <div className="product-info">
                    <div className="product-name">Sałata</div>
                    <div className="product-subtext">
                        <img src={timer} alt="" className="subtext-icon"/>
                        <span className="subtext-text">
                            Koniec przydatności: 5 dni
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;