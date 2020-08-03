import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import classes from './NavigationItems.css'
import { FaPlus } from "react-icons/fa";

class navigationItems extends Component {
  state = {
    Mobile: true,
    OfferDropdown: false,
    MassagesDropdown: false,
    TherapyDropdown: false
  }

  render() {
    return (
      <ul className={classes.Navbar}>
        <li className={classes.Navbar__topLevel__Item}><NavLink to="/" className={classes.Navbar__topLevel__NavLink}> Strona główna </NavLink></li>
        <li className={classes.Navbar__topLevel__Item}>
          <NavLink to="/uslugi" className={classes.Navbar__topLevel__NavLink}>
            <div className={classes.MobileText}> Usługi <FaPlus className={classes.MobileIcon} /> </div>
          </NavLink>
          <ul className={classes.Navbar__Dropdown}>
            <li className={classes.Navbar__secondLevel__Item}>
              <NavLink to="/uslugi/masaze" className={classes.Navbar__secondLevel__NavLink}> Masaze </NavLink>
              <ul className={classes.Navbar__Dropdown__secondLevel}>
                <li className={classes.Navbar__thirdLevel__Item}>
                  <NavLink to="/uslugi/masaze/leczniczy" className={classes.Navbar__thirdLevel__NavLink}> Leczniczy </NavLink>
                </li>
                <li className={classes.Navbar__thirdLevel__Item}>
                  <NavLink to="/uslugi/masaze/klasyczny" className={classes.Navbar__thirdLevel__NavLink}> Klasyczny </NavLink>
                </li>
                <li className={classes.Navbar__thirdLevel__Item}>
                  <NavLink to="/uslugi/masaze/sportowy" className={classes.Navbar__thirdLevel__NavLink}> Sportowy </NavLink>
                </li>
                <li className={classes.Navbar__thirdLevel__Item}>
                  <NavLink to="/uslugi/masaze/izometryczny" className={classes.Navbar__thirdLevel__NavLink}> Izometryczny </NavLink>
                </li>
                <li className={classes.Navbar__thirdLevel__Item}>
                  <NavLink to="/uslugi/masaze/drenaz-limfatyczny" className={classes.Navbar__thirdLevel__NavLink}> Drenaż Limfatyczny </NavLink>
                </li>
              </ul>
            </li>
            <li className={classes.Navbar__secondLevel__Item}>
              <NavLink to="/uslugi/terapia-manualna" className={classes.Navbar__secondLevel__NavLink}> Terapia Manualna </NavLink>
              <ul className={classes.Navbar__Dropdown__secondLevel}>
                <li className={classes.Navbar__thirdLevel__Item}>
                  <NavLink to="/uslugi/terapia-manualna/Cyriax" className={classes.Navbar__thirdLevel__NavLink}> Cyriax </NavLink>
                </li>
                <li className={classes.Navbar__thirdLevel__Item}>
                  <NavLink to="/uslugi/terapia-manualna/masaz-tkankek-glebokich" className={classes.Navbar__thirdLevel__NavLink}> Masaż tkanek głębokich </NavLink>
                </li>
                <li className={classes.Navbar__thirdLevel__Item}>
                  <NavLink to="/uslugi/terapia-manualna/terapia-miesniowo-powiezowa" className={classes.Navbar__thirdLevel__NavLink}> Terapia mięśniowo-powięziowa </NavLink>
                </li>
              </ul>
            </li>
            <li className={classes.Navbar__secondLevel__Item}>
              <NavLink to="/uslugi/kinesiology-taping" className={classes.Navbar__secondLevel__NavLink}> Kinesiology Taping </NavLink>
            </li>
            <li className={classes.Navbar__secondLevel__Item}>
              <NavLink to="/uslugi/kinezyterapia" className={classes.Navbar__secondLevel__NavLink}> Kinezyterapia </NavLink>
            </li>
            <li className={classes.Navbar__secondLevel__Item}>
              <NavLink to="/uslugi/wizyta-domowa" className={classes.Navbar__secondLevel__NavLink}> Wizyta domowa </NavLink>
            </li>
          </ul>
        </li>
        <li className={classes.Navbar__topLevel__Item}>
          <NavLink to="/cennik" className={classes.Navbar__topLevel__NavLink}> Cennik </NavLink>
        </li>
        <li className={classes.Navbar__topLevel__Item}>
          <NavLink to="/kontakt" className={classes.Navbar__topLevel__NavLink}> Kontakt </NavLink>
        </li>
      </ul>
    );
  }
};

export default navigationItems;