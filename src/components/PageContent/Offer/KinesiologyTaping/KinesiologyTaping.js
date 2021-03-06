import React from 'react'
import classes from './KinesiologyTaping.module.css'

const KinestesiologyTaping = () => {
  return (
    <div className={classes.Wrapper}>
      <h2 className={classes.H2}>Kinesiotaping</h2>
      <section className={classes.Content}>
        Jest  metodą terapeutyczną, polegającą na oklejaniu wybranych fragmentów ciała plastrami  elastycznymi o specjalnej strukturze materiału. „Metoda plastrowania” została opracowana i spopularyzowana w latach osiemdziesiątych przez dr Kenzo Kase. W Kinesiotaping’u wykorzystuje się  plaster o specjalnych właściwościach:
        <ul className={classes.List}>
          <li>Grubość i ciężar plastra zbliżone do właściwości skóry</li>
          <li>Rozciągliwość plastra 130-140 % – podobnie jak skóra</li>
          <li>Wykonany z bawełny wysokiej jakości z warstwą 100% akrylu</li>
          <li>Plaster przepuszcza powietrze</li>
          <li>Plastry są wodoodporne</li>
          <li>Może być noszony od kilu dni do kilku tygodni(można go nosić do momentu odklejenia się całego plastra)</li>
        </ul>
      </section>
      <section className={classes.Content}>
        Działanie kinesiotaping'u:
       <ul className={classes.List}>
          <li>normalizacja nieprawidłowego napięcia mięśni</li>
          <li>ułatwienie przemieszczania się mięśni względem powięzi</li>
          <li>zmniejszenie bólu poprzez aktywację tzw. endogennego systemu znieczulania, np. zmniejszenie dolegliwości bólowych kręgosłupa / barku / łokcia / nadgarstka / kolana, itp.</li>
          <li>poprawa działania dysfunkcyjnych narządów np. zwiększenie zakresu ruchu w chorym stawie</li>
          <li>poprawa mikrokrążenia – szybsze gojenie się zmian patologicznych</li>
          <li>aktywacja systemu limfatycznego – zmniejszenie stanów zapalnych, zmniejszenie obrzęków</li>
          <li>działanie na blizny pooperacyjne lub też pourazowe w celu niwelowania zrostów i „odciągnięcia” powięzi oraz w celach estetycznych</li>
        </ul>
      </section>
      <section className={classes.Content}>
        Stosowane techniki kinesiotaping'u:
        <ul className={classes.List}>
          <li>Technika mięśniowa</li>
          <li>Technika więzadłowa</li>
          <li>Technika powięziowa</li>
          <li>Technika korekcyjna</li>
          <li>Technika limfatyczna</li>
          <li>Technika funkcjonalna</li>
        </ul>
      </section>
    </div >
  )
}

export default KinestesiologyTaping