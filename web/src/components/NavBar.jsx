import '../partials/NavBar.scss'
import bell from '../assets/images/bell.svg'

function NavBar(){
    return (
        <>
            <div className='navbar'>
                <h1 className="navbar__header">Still<span className='header__paragraph'>Good</span>AI</h1>
                <button className="navbar__button button">
                    <img src={bell} alt="bell icon" className='button__icon'/>
                </button>
            </div>
        </>
    )
}

export default NavBar;