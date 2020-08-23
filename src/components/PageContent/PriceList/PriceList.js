import React, { Component } from 'react'
import classes from './PriceList.module.css'
import Link from 'next/link'

class PriceList extends Component {
  render() {
    return (
      <div>
        <p className={classes.PriceListHeader}>Cennik usług</p>
        <table className={classes.Table}>
          <thead className={classes.Thead}>
            <tr className={classes.Tr}>
              <th className={classes.Th1}>MASAŻE</th>
              <th className={classes.Th2}>CENA</th>
            </tr>
          </thead>
          <tbody className={classes.Tbody}>
            <Link href="/masaze/klasyczny">
              <tr className={classes.Tr}>
                <td className={classes.Td}>Klasyczny</td>
                <td className={classes.Td}>100 - 120 zł</td>
              </tr>
            </Link>
            <Link href="/masaze/sportowy">
              <tr className={classes.Tr}>
                <td className={classes.Td}>Sportowy</td>
                <td className={classes.Td}>100 - 120 zł</td>
              </tr>
            </Link>
            <Link href="/masaze/leczniczy">
              <tr className={classes.Tr}>
                <td className={classes.Td}>Leczniczy</td>
                <td className={classes.Td}>100 - 120 zł</td>
              </tr>
            </Link>
            <Link href="/masaze/izometryczny">
              <tr className={classes.Tr}>
                <td className={classes.Td}>Izometryczny</td>
                <td className={classes.Td}>100 - 120 zł</td>
              </tr>
            </Link>
            <Link href="/masaze/drenaz-limfatyczny">
              <tr className={classes.Tr}>
                <td className={classes.Td}>Drenaż Limfatyczny</td>
                <td className={classes.Td}>100 - 120 zł</td>
              </tr>
            </Link>
          </tbody >
        </table>

        <table className={classes.Table}>
          <thead className={classes.Thead}>
            <tr className={classes.Tr}>
              <th className={classes.Th1}>TERAPIA MANUALNA</th>
              <th className={classes.Th2}>CENA</th>
            </tr>
          </thead>
          <tbody className={classes.Tbody}>
            <Link href="/terapia-manualna/cyriax">
              <tr className={classes.Tr}>
                <td className={classes.Td}>Cyriax</td>
                <td className={classes.Td}>100 - 120 zł</td>
              </tr>
            </Link>
            <Link href="/terapia-manualna/masaz-tkanek-glebokich">
              <tr className={classes.Tr}>
                <td className={classes.Td}>Masaż tkanek głebokich</td>
                <td className={classes.Td}>100 - 120 zł</td>
              </tr>
            </Link>
            <Link href="/terapia-manualna/terapia-miesniowo-powieziowa">
              <tr className={classes.Tr}>
                <td className={classes.Td}>Terapia mięśniowo-powięziowa</td>
                <td className={classes.Td}>100 - 120 zł</td>
              </tr>
            </Link>
          </tbody >
        </table>

        <table className={classes.Table}>
          <thead className={classes.Thead}>
            <tr className={classes.Tr}>
              <th className={classes.Th1}>INNE</th>
              <th className={classes.Th2}>CENA</th>
            </tr>
          </thead>
          <tbody className={classes.Tbody}>
            <Link href="/kinezyterapia">
              <tr className={classes.Tr}>
                <td className={classes.Td}>Kinezyterapia</td>
                <td className={classes.Td}>100 - 120 zł</td>
              </tr>
            </Link>
            <Link href="/kinesiology-taping">
              <tr className={classes.Tr}>
                <td className={classes.Td}>Kinesiology Taping</td>
                <td className={classes.Td}>100 - 120 zł</td>
              </tr>
            </Link>
            <Link href="/wizyta-domowa">
              <tr className={classes.Tr}>
                <td className={classes.Td}>Wizyta Domowa</td>
                <td className={classes.Td}>100 - 120 zł</td>
              </tr>
            </Link>
            <tr className={classes.Tr}>
              <td className={classes.Td}>Dojazd poza Bydgoszcz</td>
              <td className={classes.Td}>2 zł/km</td>
            </tr>
          </tbody >
        </table>
      </div>
    )
  }
}

export default PriceList