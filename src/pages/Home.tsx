import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="homeContainer">
          <h2>Welcome Home</h2>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
