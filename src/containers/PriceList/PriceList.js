import React, { Component } from 'react'
import classes from './PriceList.module.css'

class PriceList extends Component {
  render() {
    return (
      <div>
        <p className={classes.PriceListHeader}>Cennik usług</p>
        <table className={classes.Table}>
          <thead className={classes.Thead}>
            <tr className={classes.Tr}>
              <th className={classes.Th} colSpan="3">ZABIEGI</th><th className={classes.Th}>CENA</th>
            </tr>
          </thead>
          <tbody className={classes.Tbody}>
            <tr className={classes.Tr}>
              <td colSpan="3" className={classes.Td}>Terapia Manualna</td><td className={classes.Td}>100-120 zł</td>
            </tr>
            <tr className={classes.Tr}>
              <td colSpan="3" className={classes.Td}>Terapia mięśniowo-powięziowa</td><td className={classes.Td}>100-120 zł</td>
            </tr>
            <tr className={classes.Tr}>
              <td colSpan="3" className={classes.Td}>Terapia indywidualna (ćwiczenia) </td><td className={classes.Td}>100-120 zł</td>
            </tr>
            <tr className={classes.Tr}>
              <td colSpan="3" className={classes.Td}>Trening funkcjonalny </td><td className={classes.Td}>100-120 zł</td>
            </tr>
            <tr className={classes.Tr}>
              <td colSpan="3" className={classes.Td}>Kinesiotaping </td><td className={classes.Td}>100-120 zł</td>
            </tr>
            <tr className={classes.Tr}>
              <td colSpan="3" className={classes.Td}>Wizyta domowa </td><td className={classes.Td}>100-120 zł</td>
            </tr>
          </tbody >
        </table>
      </div>
    )
  }
}

export default PriceList