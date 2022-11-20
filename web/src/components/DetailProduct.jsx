import "../partials/DetailProduct.scss";

import salata from "../assets/images/salata.png";
import dymek from "../assets/images/message.svg";
import bird from "../assets/images/bird.svg"
import peopleAvatar from "../assets/images/peoples/people-avatar.svg"
import people1 from "../assets/images/peoples/people-1.svg"
import people2 from "../assets/images/peoples/people-2.svg"
import people3 from "../assets/images/peoples/people-3.svg"
import people4 from "../assets/images/peoples/people-4.svg"

function DetailProduct() {
    return (
        <div className="details-container">
            <div className="costam">

            </div>

            <img src={salata} alt="produkt" className="image-details"/>
            <div className="details-title">Kupiłam za dużo szpinaku ODDAM</div>
            <div className="details-people">
                <div className="people-list">
                    <button className="circle"></button>
                    <button className="circle"></button>
                    <button className="circle"></button>
                    <button className="circle"></button>
                </div>
                <span className="people-text">4 osoby zainteresowane</span>
            </div>
            <span className="people-text-outer">Hej, kupiłam za dużo szpinaku i chętnie go oddam. Wciąż chrupki:) Zapraszam do kontaktu! 🥬🥬</span>


            <div className="btn-wrapper">
                <div className="user-wrapper">
                    <button className="circle-avatar"></button>

                    <div className="wrapper-wrapper">
                        <div className="name-wrapper">
                            {/*<img src={dymek} alt="message icon" className="name-icon"/>*/}
                            <span className="name-text">Anita</span>
                            <button className="circle-verified">
                                <img src={bird} alt=""/>
                            </button>
                        </div>

                        <span className="user-text">Zweryfikowana użytkowniczka</span>
                    </div>

                </div>

                <button className="buttonek">
                    <img src={dymek} alt="message icon" className="button-icon"/>
                    <span className="button-text">Napisz wiadomość</span>
                </button>
            </div>
        </div>
    );
}

export default DetailProduct;
