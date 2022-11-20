import "../partials/Card.scss";

import timer from "../assets/timer.svg";


function Card({expiration_date, src, name}) {
    const expires_in = Math.ceil((expiration_date.getTime() - new Date()) / (1000 * 3600 * 24));
    const days = expires_in === 1 ? "dzień" : "dni"
    return (
        <>

            <div className="product-card">
                <div>
                    <img
                        className="product-image"
                        src={src}
                        alt={name}
                    />
                </div>
                <div className="product-info">
                    <div className="product-name">{name}</div>
                    <div className="product-subtext">
                        <img src={timer} alt="" className="subtext-icon"/>
                        <span className="subtext-text">
                            {`Koniec przydatności: ${expires_in} ${days}`}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
