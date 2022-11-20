import "../partials/Footer.scss";
import lens from '../assets/images/lens.svg';
import home from '../assets/images/home.svg';
import user from '../assets/images/user.svg';
import shopbag from '../assets/images/shopbag.svg';

function Footer() {
    return (
        <div className='container__wrapper'>
            <div className='container'>
                <div className="button__wrapper">
                    <button className='button'>
                        <img src={home} alt="" className="button__icon"/>
                    </button>

                    <button className='button'>
                        <img src={lens} alt="" className="button__icon"/>
                    </button>

                    <button className='button'>
                        <img src={shopbag} alt="" className="button__icon"/>
                    </button>

                    <button className='button'>
                        <img src={user} alt="" className="button__icon"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Footer;