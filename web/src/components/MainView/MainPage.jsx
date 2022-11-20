import salata from "../../assets/salata.png";
import timer from "../../assets/timer.svg";
import "./MainPage.scss";

function MainView() {
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
                    ></img>
                </div>
                <div className="product-info">
                    <div className="product-name">Sałata</div>
                    <div className="product-subtext">
                        <a className="icon" src={timer} alt="Zegar">
                            Koniec przydatności: 5 dni
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainView;
