import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useResetFilters } from "../../hooks/useProductActions"
import logo2 from "../../assets/img/614589c0d6b3c0d2877ac97807dca434.png"
import logo5 from "../../assets/img/d19fae149b706bea5cb2cff6d995a101.png"

type MenuItem = {
  name: string;
  link: string;
};

const menuItems: MenuItem[] = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about-us" },
  { name: "Shop", link: "/shop" },
  { name: "Contact Us", link: "/contact-us" },
];

const subItems: MenuItem[] = [
  { name: "Our Team", link: "/team" },
  { name: "Services", link: "/services" },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Blog", link: "/news" },
];

const Header: React.FC = () => {
  const [isPagesMenuOpen, setIsPagesMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const subMenuRef = useRef<HTMLParagraphElement>(null);


  const { resetFilters } = useResetFilters();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        subMenuRef.current &&
        !subMenuRef.current.contains(event.target as Node)
      ) {
        setIsPagesMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isPagesMenuOpen]);

  return (
    <header className='header'>
      <div className="container">
        <div className="header__conteiner">

          <div className="header__content-menu">
            <div className="header__content-menu-logo">
              <img src={logo2} alt=''/>
              <img src={logo5} alt=''/>
              <span className="header__content-menu-logo-label">Store musical instrument</span>
            </div>

            <nav className="header__content-menu-navigation">
              <ul className="header__content-menu-navigation-items">
                {menuItems.map((item) => (
                  <li
                    key={item.name}
                    className={`header__content-menu-navigation-items-item ${
                      location.pathname === item.link
                        ? "header__content-menu-navigation-items-item_active"
                        : ""
                    }`}
                    onClick={() => {
                      window.scrollTo(0, 0);
                      resetFilters();
                    }}
                  >
                    <Link
                      className="header__content-menu-navigation-items-item-link"
                      to={item.link}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}

                <nav className="header__content-menu-navigation-items-submenu">
                  <p
                    onClick={() => {
                      setIsPagesMenuOpen(!isPagesMenuOpen);
                    }}
                    ref={subMenuRef}
                    className="header__content-menu-navigation-items-submenu-text"
                  >
                    Pages
                    <span
                      className={`header__content-menu-navigation-items-submenu-text-arrow ${
                        isPagesMenuOpen
                          ? "header__content-menu-navigation-items-submenu-text-arrow_active"
                          : ""
                      }`}
                    ></span>
                  </p>

                  <ul
                    className={
                      isPagesMenuOpen
                        ? "header__content-menu-navigation-items-submenu-lists header__content-menu-navigation-items-submenu-lists_visible"
                        : "header__content-menu-navigation-items-submenu-lists"
                    }
                  >
                    {subItems.map((subItem) => (
                      <li
                        className={`header__content-menu-navigation-items-submenu-lists-list ${
                          location.pathname === subItem.link
                            ? "header__content-menu-navigation-items-submenu-lists-list_active"
                            : ""
                        }`}
                        key={subItem.name}
                      >
                        <Link
                          className="header__content-menu-navigation-items-submenu-lists-list-link"
                          onClick={() => {
                            window.scrollTo(0, 0);
                            resetFilters();
                          }}
                          to={subItem.link}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </ul>
            </nav>
          </div>

        </div>
      </div>
    </header>
  );
}
export default Header;