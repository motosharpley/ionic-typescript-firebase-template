import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

// Pages and Components
import Create from './pages/Create';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ExploreContainer from './components/ExploreContainer';
import Watch from './pages/Watch';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <ExploreContainer />
      <IonRouterOutlet>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />

        <Route path="/create" component={Create} />
        <Route path="/watch" component={Watch} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
