import React, { Component } from "react";
import classes from './NavigationItems.module.css'
import Link from 'next/link'
import Dropdown from './Dropdown/Dropdown'

class navigationItems extends Component {
  state = {
    OfferDD: false,
  }

  offerClickHandler = () => { this.setState(() => ({ OfferDD: !prevState.OfferDD })) }

  offerMouseEnterHandler = () => { this.setState(prevState => ({ OfferDD: !prevState.OfferDD })) }

  offerMouseLeftHandler = () => { this.setState(() => ({ OfferDD: false })) }

  render() {
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
          ]} />
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