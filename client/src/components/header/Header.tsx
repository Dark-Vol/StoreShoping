import React from 'react';
import logo2 from "../../assets/img/614589c0d6b3c0d2877ac97807dca434.png"
import logo5 from "../../assets/img/d19fae149b706bea5cb2cff6d995a101.png"

const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="header__conteiner">
          <div className="header__content-menu">
            <div className="header__content-menu-logo">
              <img src={logo2} alt=''/>
              <img src={logo5} alt=''/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;