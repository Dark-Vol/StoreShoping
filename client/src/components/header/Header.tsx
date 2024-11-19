import React from 'react';
import logo1 from "../../assets/img/logo1.svg"

const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="header__conteiner">
          <div className="header__content-menu">
            <div className="header__content-menu-logo">
              <img src={logo1} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
