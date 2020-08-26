import React, { Component } from "react";
import classes from './NavigationItems.module.css'
import Link from 'next/link'
import Dropdown from './Dropdown/Dropdown'

class navigationItems extends Component {
  state = {
    OfferDD: false,
  }

  offerTouchHandler = () => { this.setState(prevState => ({ OfferDD: !prevState.OfferDD })) }

  offerMouseEnterHandler = () => { this.setState(prevState => ({ OfferDD: !prevState.OfferDD })) }

  offerMouseLeftHandler = () => { this.setState(() => ({ OfferDD: false })) }

  clickLinkHandler = () => { this.setState(() => ({ OfferDD: false })) }

  render() {
    return (
      <div className={classes.Navbar}>
        <Link href="/" as={`/`}>
          <a className={classes.Link}>
            <div className={classes.NavLink}>Strona główna</div>
          </a>
        </Link>
        <Dropdown
          title="Uslugi"
          touched={this.offerTouchHandler}
          mouseEntered={this.offerMouseEnterHandler}
          mouseLeft={this.offerMouseLeftHandler}
          open={this.state.OfferDD}
          clicked={this.clickLinkHandler}
          list={[
            ["/masaze", "Masaże"],
            ["/terapia-manualna", "Terapia Manualna"],
            ["/kinesiology-taping", "Kinesiology taping"],
            ["/kinezyterapia", "Kinezyterapia"],
            ["/wizyta-domowa", "Wizyta domowa"]]} />
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