import React from "react";

import classes from './NavigationItems.css'
import NavigationItem from './NavigationItems/NavigationItem/NavigationItem'

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>Strona główna</NavigationItem>
    <NavigationItem link="/uslugi" exact>Usługi</NavigationItem>
    <NavigationItem link="/cennik" exact>Cennik</NavigationItem>
    <NavigationItem link="/kontakt">Kontakt</NavigationItem>
  </ul>
);

export default navigationItems;
