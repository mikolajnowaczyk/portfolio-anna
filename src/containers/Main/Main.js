import React, { Component } from 'react'
import * as images from '../../shared/images'

// import test from '../../assets/images/test.jpg'
import classes from './Main.module.css'
// import bck from '../../assets/images/logo.png'

class Main extends Component {
  render() {
    // let heroImage = require("/images/test.jpg");
    return (
      <div className={classes.Wrapper}>
        {/* <div className={classes.HeroImage} style={{ backgroundImage: `url(require("/../assets/images/logo.png"))` }} /> */}
        {/* <div className={classes.HeroImage} style={{ backgroundImage: `url(${bck})` }} /> */}
        {/* <div className={classes.HeroImage} style={{ backgroundImage: `url(${require(images.hand)})` }} /> */}
        {/* <div className={classes.HeroImage} style={{ backgroundImage: 'url(' + require('./../../assets/images/test.jpg') + ')' }} /> */}
        <img src={"./images/hand.jpg"} alt="logo" height="100%" width="100%" />
        <div className={classes.AboutMe} >
          <h1>
            „Fizjoterapia Anna Karpińska” – Terapia manualna i rehabilitacja
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis consequat dolor, a feugiat lorem interdum eu. Morbi gravida ac nisi eget fermentum. Nulla hendrerit metus commodo augue venenatis viverra. Suspendisse nec justo ut arcu hendrerit porttitor. Nullam quis quam condimentum, rutrum orci ac, condimentum lorem. Suspendisse finibus libero et tortor mollis, eu mattis libero aliquet. Nulla ut ultricies tellus. Vivamus eget justo tortor. Nunc vel pharetra felis. Etiam auctor risus arcu. Etiam nulla nisi, egestas nec diam suscipit, rutrum bibendum augue.
          </p>
          <p>
            Praesent mauris justo, aliquet vel cursus et, condimentum eget nulla. Proin congue ultrices semper. Etiam tristique mauris non imperdiet sodales. Maecenas scelerisque urna non lectus efficitur consequat. Quisque sit amet dictum ligula. Quisque rhoncus dui nulla, cursus vulputate justo rhoncus et. Nunc sit amet arcu efficitur, vestibulum risus eu, vulputate enim. Nullam non nisi a diam dictum porttitor et at metus. Etiam dignissim mi et augue feugiat tempus.
            </p>
        </div>
      </div>
    )
  }
}

export default Main