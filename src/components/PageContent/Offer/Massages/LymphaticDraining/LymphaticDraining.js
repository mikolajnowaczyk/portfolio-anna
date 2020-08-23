import React from 'react'
import classes from './LymphaticDraining.module.css'

const LymphaticDraining = (props) => {
  return (
    <div className={classes.Wrapper}>
      <h2>Drenaż limfatyczny</h2>
      <section>
        Drenaż limfatyczny polega na usprawnieniu krążenia chłonki (limfy) w układzie limfatycznym. Drenaż limfatyczny (masaż limfatyczny) likwiduje obrzęki, wysięki lub zmiany skórne wynikające z zaburzeń krążenia limfy. Limfę podczas masażu odprowadza się z najmniejszych naczyń limfatycznych do coraz większych likwidując w ten sposób zatory.
      </section>
      <section>
        Przebieg masażu
        Nie masuje się węzłów chłonnych tylko ich okolice, wykonując ruchy przesuwające, przepychające i wyciskające. W trakcie zabiegu wykonuje się masaż grzbietu, klatki piersiowej, brzucha, kończyn dolnych i górnych, karku i głowy oraz twarzy. Drenaż każdej części ciała rozpoczyna się głaskaniem, a kończy wyciskaniem (wyjątek stanowi szyja i twarz) – zawsze wzdłuż naczyń limfatycznych albo w kierunku najbliższych węzłów chłonnych. Kończyna masowana zawsze ułożona jest w pozycji tzw. drenażowej.
      </section>
      <section>
        Wskazania do drenażu limfatycznego:
        <ul>
          <li>Obrzęki limfatyczne np. po mastektomii</li>
          <li>Niewydolność żylna</li>
          <li>Limfopatia polekowa</li>
          <li>Przewlekłe obrzęki</li>
          <li>Zaburzenia troficzne skóry</li>
        </ul>
      </section>
      <section>
        Przeciwwskazania do drenażu limfatycznego
        <ul>
          <li>ostry obrzęk płuc</li>
          <li>ostry uraz tkanek miękkich</li>
          <li>ostra zakrzepica żylna</li>
          <li>choroby układu sercowo-naczyniowego</li>
          <li>wszczepiony rozrusznik serca</li>
          <li>padaczka</li>
          <li>gorączka</li>
          <li>jaskra</li>
          <li>niewydolność nerek</li>
          <li>niewydolność wątroby</li>
          <li>choroby zakaźne</li>
          <li>zakrzepica żył głębokich</li>
          <li>zapalenie naczyń chłonnych</li>
          <li>ciąża</li>
          <li>choroby nowotworowe &lt; 5 lat od leczenia</li>
          <li>miesiączka</li>
        </ul>
      </section>
    </div >
  )
}

export default LymphaticDraining