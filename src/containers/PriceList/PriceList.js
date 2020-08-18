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
              <th className={classes.Th} colSpan="3">MASAŻE</th><th className={classes.Th}>CENA</th>
            </tr>
          </thead>
          <tbody className={classes.Tbody}>
            <Link href="/wizyta-domowa">
              <tr className={classes.Tr}>
                <td colSpan="3" className={classes.Td}>Klasyczny</td><td className={classes.Td}>100-120 zł</td>
              </tr>
            </Link>
            <Link href="/wizyta-domowa">
              {/* <a> */}
              <tr className={classes.Tr}>
                <td colSpan="3" className={classes.Td}>Sportowy</td><td className={classes.Td}>100-120 zł</td>
              </tr>
              {/* </a> */}
            </Link>
            <Link href="/wizyta-domowa">
              {/* <a> */}
              <tr className={classes.Tr}>
                <td colSpan="3" className={classes.Td}>Leczniczy</td><td className={classes.Td}>100-120 zł</td>
              </tr>
              {/* </a> */}
            </Link>
            <Link href="/wizyta-domowa">
              {/* <a> */}
              <tr className={classes.Tr}>
                <td colSpan="3" className={classes.Td}>Izometryczny</td><td className={classes.Td}>100-120 zł</td>
              </tr>
              {/* </a> */}
            </Link>
            <Link href="/wizyta-domowa">
              {/* <a> */}
              <tr className={classes.Tr}>
                <td colSpan="3" className={classes.Td}>Drenaż Limfatyczny </td><td className={classes.Td}>100-120 zł</td>
              </tr>
              {/* </a> */}
            </Link>
          </tbody >
        </table>
        <table className={classes.Table}>
          <thead className={classes.Thead}>
            <tr className={classes.Tr}>
              <th className={classes.Th} colSpan="3">TERAPIA MANUALNA</th><th className={classes.Th}>CENA</th>
            </tr>
          </thead>
          <tbody className={classes.Tbody}>
            <Link href="/wizyta-domowa">
              {/* {/* <a> */}
              <tr className={classes.Tr}>
                <td colSpan="3" className={classes.Td}>Klasyczny</td><td className={classes.Td}>100-120 zł</td>
              </tr>
              {/* </a> */}
            </Link>
            <Link href="/wizyta-domowa">
              {/* <a> */}
              <tr className={classes.Tr}>
                <td colSpan="3" className={classes.Td}>Sportowy</td><td className={classes.Td}>100-120 zł</td>
              </tr>
              {/* </a> */}
            </Link>
            <Link href="/wizyta-domowa">
              {/* <a> */}
              <tr className={classes.Tr}>
                <td colSpan="3" className={classes.Td}>Leczniczy</td><td className={classes.Td}>100-120 zł</td>
              </tr>
              {/* </a> */}
            </Link>
            <Link href="/wizyta-domowa">
              {/* <a> */}
              <tr className={classes.Tr}>
                <td colSpan="3" className={classes.Td}>Izometryczny</td><td className={classes.Td}>100-120 zł</td>
              </tr>
              {/* </a> */}
            </Link>
            <Link href="/wizyta-domowa">
              {/* <a> */}
              <tr className={classes.Tr}>
                <td colSpan="3" className={classes.Td}>Drenaż Limfatyczny </td><td className={classes.Td}>100-120 zł</td>
              </tr>
              {/* </a> */}
            </Link>
          </tbody >
        </table>
      </div>
    )
  }
}

export default PriceList