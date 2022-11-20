import salata from "../assets/images/salata.png";
import "../partials/CardItem.scss";
import bird from "../assets/images/bird.svg";


function CardItem() {
    return (
        <>
            <div className="details-containerr">
                <div className="costam">

                </div>

                <img src={salata} alt="produkt" className="image-detailss"/>
                <div className="details-titlee">Przyjmę resztki do kompostownika</div>
                {/*<div className="details-people">*/}
                {/*    <div className="people-list">*/}
                {/*        <button className="circle"></button>*/}
                {/*        <button className="circle"></button>*/}
                {/*        <button className="circle"></button>*/}
                {/*        <button className="circle"></button>*/}
                {/*    </div>*/}
                {/*    <span className="people-text">4 osoby zainteresowane</span>*/}
                {/*</div>*/}

                {/*<span className="people-text-outer">Hej, kupiłam za dużo szpinaku i chętnie go oddam. Wciąż chrupki:) Zapraszam do kontaktu! 🥬🥬</span>*/}

                <div className="info_wrapperr">


                    <div className="pojemnoscc">
                        <span className="user-textt">Max. pojemność</span>
                        <span className="name-text">40 kg</span>

                    </div>

                    <div className="user-wrapperr">
                        <button className="circle-avatarr"></button>
                        <span className="user-textt">Dodane przez: Anita</span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CardItem;