import React, { Component } from 'react'
import classes from './PriceList.css'

class PriceList extends Component {
  render() {
    return (
      <div>
        <p className={classes.PriceListHeader}>Cennik usług</p>
        <table className={classes.Table}>
          <thead>
            <tr className={classes.TableHead}>
              <th colspan="3">ZABIEGI</th><th>CENA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="3">Terapia Manualna</td><td>100-120 zł</td>
            </tr>
            <tr>
              <td colspan="3">Terapia mięśniowo-powięziowa</td><td>100-120 zł</td>
            </tr>
            <tr>
              <td colspan="3">Terapia indywidualna (ćwiczenia) </td><td>100-120 zł</td>
            </tr>
            <tr>
              <td colspan="3">Trening funkcjonalny </td><td>100-120 zł</td>
            </tr>
            <tr>
              <td colspan="3">Kinesiotaping </td><td>100-120 zł</td>
            </tr>
            <tr>
              <td colspan="3">Wizyta domowa </td><td>100-120 zł</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default PriceList