import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import LazyLoad from './hoc/lazyLoad/LazyLoad'
// import Massages from './containers/Offer/Massages/Massages'

const MassageClassic = React.lazy(() => import('./containers/Offer/Massages/Classic/Classic'))
const LazyMassageClassic = (props) => <LazyLoad component={MassageClassic} {...props} />

const MassageSport = React.lazy(() => import('./containers/Offer/Massages/Sport/Sport'))
const LazyMassageSport = (props) => <LazyLoad component={MassageSport} {...props} />

const MassageIsometric = React.lazy(() => import('./containers/Offer/Massages/Isometric/Isometric'))
const LazyMassageIsometric = (props) => <LazyLoad component={MassageIsometric} {...props} />

const LymphaticDraining = React.lazy(() => import('./containers/Offer/Massages/LymphaticDraining/LymphaticDraining'))
const LazyLymphaticDraining = (props) => <LazyLoad component={LymphaticDraining} {...props} />

const MassageHealing = React.lazy(() => import('./containers/Offer/Massages/Healing/Healing'))
const LazyMassageHealing = (props) => <LazyLoad component={MassageHealing} {...props} />

const MassageRelax = React.lazy(() => import('./containers/Offer/Massages/Relax/Relax'))
const LazyMassageRelax = (props) => <LazyLoad component={MassageRelax} {...props} />

const CMassages = React.lazy(() => import('./containers/Offer/Massages/Massages'))
const LazyMassages = (props) => <LazyLoad component={CMassages} {...props} />

const TherapyMuscle = React.lazy(() => import('./containers/Offer/ManualTherapy/Muscle/Muscle'))
const LazyTherapyMuscle = (props) => <LazyLoad component={TherapyMuscle} {...props} />

const TherapyCyriax = React.lazy(() => import('./containers/Offer/ManualTherapy/Cyriax/Cyriax'))
const LazyTherapyCyriax = (props) => <LazyLoad component={TherapyCyriax} {...props} />

const TherapyDeepTissue = React.lazy(() => import('./containers/Offer/ManualTherapy/DeepTissue/DeepTissue'))
const LazyTherapyDeepTissue = (props) => <LazyLoad component={TherapyDeepTissue} {...props} />

const ManualTherapy = React.lazy(() => import('./containers/Offer/ManualTherapy/ManualTherapy'))
const LazyManualTherapy = (props) => <LazyLoad component={ManualTherapy} {...props} />

const KinesiologyTaping = React.lazy(() => import('./containers/Offer/KinesiologyTaping/KinesiologyTaping'))
const LazyKinesiologyTaping = (props) => <LazyLoad component={KinesiologyTaping} {...props} />

const KinesioTherapy = React.lazy(() => import('./containers/Offer/KinesioTherapy/KinesioTherapy'))
const LazyKinesioTherapy = (props) => <LazyLoad component={KinesioTherapy} {...props} />

const HomeVisit = React.lazy(() => import('./containers/Offer/HomeVisit/HomeVisit'))
const LazyHomeVisit = (props) => <LazyLoad component={HomeVisit} {...props} />

const Offer = React.lazy(() => import('./containers/Offer/Offer'))
const LazyOffer = (props) => <LazyLoad component={Offer} {...props} />

const Contact = React.lazy(() => import('./containers/Contact/Contact'))
const LazyContact = (props) => <LazyLoad component={Contact} {...props} />

const PriceList = React.lazy(() => import('./containers/PriceList/PriceList'))
const LazyPriceList = (props) => <LazyLoad component={PriceList} {...props} />

const MainPage = React.lazy(() => import('./containers/Main/Main'))
const LazyMainPage = (props) => <LazyLoad component={MainPage} {...props} />

class App extends Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.location.pathname !== prevProps.location.pathname
    ) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/uslugi/masaze/klasyczny" component={() => <LazyMassageClassic />} />
        <Route path="/uslugi/masaze/sportowy" component={() => <LazyMassageSport />} />
        <Route path="/uslugi/masaze/izometryczny" component={() => <LazyMassageIsometric />} />
        <Route path="/uslugi/masaze/drenaz-limfatyczny" component={() => <LazyLymphaticDraining />} />
        <Route path="/uslugi/masaze/leczniczy" component={() => <LazyMassageHealing />} />
        <Route path="/uslugi/masaze/relaksacyjny" component={() => <LazyMassageRelax />} />
        <Route path="/uslugi/masaze" component={() => <LazyMassages />} />
        <Route path="/uslugi/terapia-manualna/terapia-miesniowo-powiezowa" component={() => <LazyTherapyMuscle />} />
        <Route path="/uslugi/terapia-manualna/Cyriax" component={() => <LazyTherapyCyriax />} />
        <Route path="/uslugi/terapia-manualna/masaz-tkankek-glebokich" component={() => <LazyTherapyDeepTissue />} />
        <Route path="/uslugi/terapia-manualna" component={() => <LazyManualTherapy />} />
        <Route path="/uslugi/kinesiology-taping" component={() => <LazyKinesiologyTaping />} />
        <Route path="/uslugi/kinezyterapia" component={() => <LazyKinesioTherapy />} />
        <Route path="/uslugi/wizyta-domowa" component={() => <LazyHomeVisit />} />
        <Route path="/uslugi" component={LazyOffer} />
        <Route path="/kontakt" component={LazyContact} />
        <Route path="/cennik" component={LazyPriceList} />
        <Route path="/" component={LazyMainPage} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  };
};

// export default withRouter(App);
export default App;
