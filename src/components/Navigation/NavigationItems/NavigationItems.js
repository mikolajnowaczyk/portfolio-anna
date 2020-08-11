import React, { Component } from "react";
// import { Navdivnk } from 'react-router-dom'
import classes from './NavigationItems.module.css'
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Link from 'next/link'
import Dropdown from './Dropdown/Dropdown'
import Auxi from '../../../hoc/Auxilary/Auxilary'

class navigationItems extends Component {
  state = {
    OfferDD: false,
    MassageDD: false,
    TherapyDD: false,
    Offercounter: 0
  }

  offerClickHandler = () => {
    console.log("Offer click!");
    this.setState(prevState => ({ ...prevState, OfferDD: !prevState.OfferDD }))
  }

  massagesClickHandler = () => {
    console.log("Massage click!");
    this.setState(prevState => ({ ...prevState, MassageDD: !prevState.MassageDD }))
  }

  therapyClickHandler = () => {
    console.log("Therapy click!");
    this.setState(prevState => ({ ...prevState, TherapyDD: !prevState.TherapyDD }))
  }

  offerMouseEnterHandler = () => {
    console.log("Offer hover!"); this.setState(prevState => ({ OfferDD: !prevState.OfferDD }))
  }

  offerMouseLeftHandler = () => { console.log("Offer hover left!"); this.setState(() => ({ OfferDD: false })) }

  massageMouseEnterHandler = () => { console.log("Massage hover!"); this.setState(() => ({ MassageDD: true })) }

  massageMouseLeftHandler = () => { console.log("Massage hover left!"); this.setState(() => ({ MassageDD: false })) }

  therapyMouseEnterHandler = () => { console.log("Therapy hover!"); this.setState(() => ({ TherapyDD: true })) }

  therapyMouseLeftHandler = () => { console.log("Therapy hover left!"); this.setState(() => ({ TherapyDD: false })) }

  render() {
    // const offerDropdownClasses = this.state.OfferDD ? [classes.offerDropdown] : null;
    // let OfferDropdownContentClasses = [classes.DropdownContent];
    // let MassageDropdownContentClasses = [classes.DropdownContent];
    // let TherapyDropdownContentClasses = [classes.DropdownContent];

    // if (this.state.OfferDD) { OfferDropdownContentClasses.push(classes.ShowDD) }
    // if (this.state.MassageDD) { MassageDropdownContentClasses.push(classes.ShowDD) }
    // if (this.state.TherapyDD) { TherapyDropdownContentClasses.push(classes.ShowDD) }

    return (
      <div className={classes.Navbar}>
        <Link href="/">
          <a className={classes.Link}>
            <div className={classes.NavLink}>Strona główna</div>
          </a>
        </Link>
        <Dropdown
          title="Uslugi"
          clicked={this.offerClickHandler}
          mouseEntered={this.offerMouseEnterHandler}
          mouseLeft={this.offerMouseLeftHandler}
          open={this.state.OfferDD}
          list={[
            ["/uslugi/masaze", "Masaze"],
            ["/uslugi/terapia-manualna", "Terapia Manualna"],
            ["/uslugi/kinesiology-taping", "Kinesiology taping"],
            ["/uslugi/kinezyterapia", "Kinezyterapia"],
            ["/uslugi/wizyta-domowa", "Wizyta domowa"]
          ]} >
          {/* <Dropdown
            nested
            title="Masaże"
            clicked={this.massagesClickHandler}
            mouseEntered={this.massageMouseEnterHandler}
            mouseLeft={this.massageMouseLeftHandler}
            open={this.state.MassageDD}
            list={[
              ["/uslugi/masaze/leczniczy", "Leczniczy"],
              ["/uslugi/masaze/klasyczny", "Klasyczny"],
              ["/uslugi/masaze/sportowy ", "Sportowy"],
              ["/uslugi/masaze/izometryczny", "Izometryczny"],
              ["/uslugi/masaze/drenaz-limfatyczny", "Drenaż Limfatyczny"],
            ]} />
          <Dropdown
            title="Terapie"
            nested
            clicked={this.therapyClickHandler}
            mouseEntered={this.therapyMouseEnterHandler}
            mouseLeft={this.therapyMouseLeftHandler}
            open={this.state.TherapyDD}
            list={[
              ["uslugi/terapia-manualna/cyriax", "Cyriax"],
              ["uslugi/terapia-manualna/masaz-tkanek-glebokich", "Masaż tkanek głębokich"],
              ["uslugi/terapia-manualna/terapia-miesiowo-powieziowa", "Terapia mięśniowo-powięziowa"]
            ]} /> */}
        </Dropdown>
        <Link href="/cennik">
          <a className={classes.Link}>
            <div className={classes.NavLink}>Cennik</div>
          </a>
        </Link>
        <Link href="/kontakt">
          <a className={classes.Link}>
            <div className={classes.NavLink}>Kontakt</div>
          </a>
        </Link>
      </div>
    );
  }
};

export default navigationItems;