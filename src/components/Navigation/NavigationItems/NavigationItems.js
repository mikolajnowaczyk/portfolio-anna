import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
import { FaAngleUp, FaAngleDown, FaAngleRight } from "react-icons/fa";

class navigationItems extends Component {
  render() {
    return (
      <ul className={classes.Navbar}>
        <li className={classes.Navbar__topLevel__Item}><NavLink to="/" className={classes.Navbar__topLevel__NavLink}> Strona główna </NavLink></li>
        <li className={classes.Navbar__topLevel__Item}>
          <NavLink to="/uslugi" className={classes.Navbar__topLevel__NavLink}> Usługi </NavLink>
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

      // <div className={classes.navbar}>
      //   <NavLink to="/" className={classes.NavbarTopLevel}>Strona główna</NavLink>
      //   <div className={classes.dropdown}>
      //     <button className={classes.dropbtn}>
      //       <NavLink to="/uslugi" className={classes.NavbarTopLevel}>Usługi</NavLink>
      //     </button>
      //     <div className={classes.dropdownContent}>
      //       <NavLink to="/uslugi/kinesiology-taping">Kinesiology Taping</NavLink>
      //       <NavLink to="/uslugi/kinezyterapia">Kinezyterapia</NavLink>
      //       <NavLink to="/uslugi/wizyta-domowa">Wizyty Domowe</NavLink>
      //       <div className={classes.dropdown2}>
      //         <button className={classes.dropbtn2}>
      //           <NavLink to="/uslugi/terapia-manualna">Terapia manualna</NavLink>
      //         </button>
      //         <div className={classes.dropdownContent2}>
      //           <NavLink to="/uslugi/terapia-manualna/cyriax">Cyriax</NavLink>
      //           <NavLink to="/uslugi/terapia-manualna">Masaż tkanek głębokich</NavLink>
      //           <NavLink to="/uslugi/terapia-manualna">Terapia mięśniowo-powięziowa</NavLink>
      //         </div>
      //       </div>
      //       <div className={classes.dropdown2}>
      //         <button className={classes.dropbtn2}>
      //           <NavLink to="/uslugi/masaze">Masaże</NavLink>
      //         </button>
      //         <div className={classes.dropdownContent2}>
      //           <NavLink to="/uslugi/masaze/leczniczy">Leczniczy</NavLink>
      //           <NavLink to="/uslugi/masaze/klasyczny">Klasyczny</NavLink>
      //           <NavLink to="/uslugi/masaze/sportowy">Sportowy</NavLink>
      //           <NavLink to="/uslugi">Izometryczny</NavLink>
      //           <NavLink to="/uslugi">Drenaż Limfatyczny</NavLink>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      //   <NavLink to="/cennik" className={classes.NavbarTopLevel}>Cennik</NavLink>
      //   <NavLink to="/kontakt" className={classes.NavbarTopLevel}>Kontakt</NavLink>
      // </div >

      // <ul className={classes.topLevelMenu}>
      //   <NavigationItem link="/" exact name="Strona główna" />
      //   <NavigationItem link="/uslugi" exact name="Usługi" >
      //     <ul className={classes.secondLevelMenu}>
      //       <NavigationItem link="/cennik" name="Masaze" exact >
      //         <ul className={classes.thirdLevelMenu}>
      //           <NavigationItem link="/cennik" name="Leczniczy" exact />
      //           <NavigationItem link="/cennik" name="Klasyczny" exact />
      //           <NavigationItem link="/cennik" name="Sportowy" exact />
      //           <NavigationItem link="/cennik" name="Izometryczny" exact />
      //           <NavigationItem link="/cennik" name="Drenaż limfatyczny" exact />
      //         </ul>
      //       </NavigationItem>
      //       <NavigationItem link="/cennik" name="Terapia manualna" exact >
      //         <ul className={classes.thirdLevelMenu}>
      //           <NavigationItem link="/cennik" name="Cyriax" exact />
      //           <NavigationItem link="/cennik" name="Masaż tkanek głębokich" exact />
      //           <NavigationItem link="/cennik" name="Terapia mięśniowo-powięziowa" exact />
      //         </ul>
      //       </NavigationItem>
      //       <NavigationItem link="/cennik" name="Kinesiology Taping" exact />
      //       <NavigationItem link="/cennik" name="Kinezyterapia" exact />
      //       <NavigationItem link="/cennik" name="Wizyta domowa" exact />
      //     </ul>
      //   </NavigationItem>
      //   <NavigationItem link="/cennik" name="Cennik" exact />
      //   <NavigationItem link="/kontakt" name="Kontakt" exact />
      // </ul >
    );
  }
};

export default navigationItems;


{/* <div>
<NavigationItem
  mouseEntered={this.hoverOfferStartHandler}
  mouseLeft={this.leftOfferStartHandler}
  showChildren={this.state.showOfferMain}
  link="/uslugi"
  name="Usługi"
  icon={offerIcon}
  exact />
{offerContent}
</div> */}